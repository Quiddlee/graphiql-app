/* eslint-disable no-case-declarations */
import { createContext, PropsWithChildren, useCallback, useEffect, useMemo, useReducer } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';

import useEditor from '@components/Editor/lib/hooks/useEditor';
import { INITIAL_VIEWS, NEW_VIEW } from '@components/ViewList/const/const';
import { Action, ViewContext as TViewContext, View, ViewInitialState } from '@components/ViewList/context/types';
import localStorageKeys from '@shared/constants/localStorageKeys';
import ROUTES from '@shared/constants/routes';
import urlParams from '@shared/constants/urlParams';
import { useLanguage } from '@shared/Context/hooks';
import useLocalStorage from '@shared/lib/hooks/useLocalStorage';
import useUrl from '@shared/lib/hooks/useUrl';

const initialState: ViewInitialState = {
  views: localStorage.getItem(localStorageKeys.VIEWS)
    ? JSON.parse(localStorage.getItem(localStorageKeys.VIEWS) as string)
    : INITIAL_VIEWS,
  activeView: Number(localStorage.getItem(localStorageKeys.ACTIVE_VIEW)) || 0,
};

function reducer(state: ViewInitialState, action: Action): ViewInitialState {
  switch (action.type) {
    case 'view/viewAdded':
      return {
        views: [...state.views, action.payload.view],
        activeView: action.payload.activeView,
      };

    case 'view/viewChanged':
      return {
        ...state,
        activeView: action.payload,
      };

    case 'view/viewRenamed':
      return {
        ...state,
        views: state.views.map((view) => {
          if (view.id !== action.payload.id) return view;

          return {
            ...view,
            name: action.payload.name,
          };
        }),
      };

    case 'view/viewDeleted':
      return {
        ...state,
        activeView: action.payload.activeView,
        views: action.payload.updatedViews,
      };

    default:
      return state;
  }
}

export const ViewContext = createContext<TViewContext>({} as TViewContext);

const ViewProvider = ({ children }: PropsWithChildren) => {
  const [{ views, activeView }, dispatch] = useReducer(reducer, initialState);
  const { readUrl, setUrl } = useUrl();
  const navigate = useNavigate();
  const location = useLocation();
  useLocalStorage(localStorageKeys.ACTIVE_VIEW, activeView);
  useLocalStorage(localStorageKeys.VIEWS, views);
  const { translation } = useLanguage();
  const { invalidateKeys } = useEditor();

  const isMain = location.pathname.slice(1) === ROUTES.MAIN;

  const handleActiveView = useCallback(
    (id: number) => {
      const newActiveView = views.find((view) => view.id === id);

      if (!newActiveView) return;
      if (!isMain) navigate(ROUTES.MAIN);

      const { query, variables, headers } = newActiveView;
      dispatch({ type: 'view/viewChanged', payload: id });
      setUrl({
        query,
        variables,
        headers,
      });
      invalidateKeys();
    },
    [invalidateKeys, isMain, navigate, setUrl, views],
  );

  const handleAddView = useCallback(() => {
    const id = Date.now();

    dispatch({
      type: 'view/viewAdded',
      payload: { view: { ...NEW_VIEW, id, name: translation.nav.viewList.newView }, activeView: id },
    });

    setUrl({
      query: NEW_VIEW.query,
      variables: NEW_VIEW.variables,
      headers: NEW_VIEW.headers,
    });
    invalidateKeys();
  }, [invalidateKeys, setUrl, translation.nav.viewList.newView]);

  const handleRenameView = useCallback((id: number, newName: string) => {
    dispatch({ type: 'view/viewRenamed', payload: { name: newName, id } });
  }, []);

  const handleDeleteView = useCallback(
    (id: number) => {
      const updatedViews = views.filter((view) => view.id !== id);
      const newActiveViewId = activeView === id ? updatedViews[0].id : activeView;
      const { query, variables, headers } = updatedViews.find((view) => view.id === newActiveViewId) as View;

      setUrl({
        query,
        variables,
        headers,
      });

      dispatch({
        type: 'view/viewDeleted',
        payload: {
          updatedViews,
          activeView: newActiveViewId,
        },
      });
      invalidateKeys();
    },
    [activeView, invalidateKeys, setUrl, views],
  );

  useEffect(() => {
    // mutating current view object when user typing in the editor
    // and saving the view array in the localStorage
    // mutating in order not to re-render every time user typing

    const query = readUrl(urlParams.QUERY);
    const headers = readUrl(urlParams.HEADERS);
    const variables = readUrl(urlParams.VARIABLES);

    const currView = views.find((view) => view.id === activeView);

    if (!currView) return;

    currView.query = query;
    currView.headers = headers;
    currView.variables = variables;

    localStorage.setItem(localStorageKeys.VIEWS, JSON.stringify(views));
  }, [activeView, readUrl, views]);

  const value = useMemo<TViewContext>(() => {
    return {
      views,
      activeView,
      handleActiveView,
      handleAddView,
      handleRenameView,
      handleDeleteView,
    };
  }, [activeView, handleActiveView, handleAddView, handleDeleteView, handleRenameView, views]);

  return <ViewContext.Provider value={value}>{children}</ViewContext.Provider>;
};

export default ViewProvider;
