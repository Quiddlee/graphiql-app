import { createContext, PropsWithChildren, useCallback, useEffect, useMemo, useReducer } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';

import { INITIAL_VIEWS, NEW_VIEW } from '@components/ViewList/const/const';
import { Action, ViewContext as TViewContext, ViewInitialState } from '@components/ViewList/context/types';
import localStorageKeys from '@shared/constants/localStorageKeys';
import ROUTES from '@shared/constants/routes';
import urlParams from '@shared/constants/urlParams';
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

  const isMain = location.pathname.slice(1) === ROUTES.MAIN;

  const handleActiveView = useCallback(
    (id: number) => {
      const newActiveView = views[id];

      if (!newActiveView) return;
      if (!isMain) navigate(ROUTES.MAIN);

      const { query, variables, headers } = newActiveView;
      dispatch({ type: 'view/viewChanged', payload: id });
      setUrl({
        query,
        variables,
        headers,
      });
    },
    [isMain, navigate, setUrl, views],
  );

  const handleAddView = useCallback(() => {
    dispatch({ type: 'view/viewAdded', payload: { view: NEW_VIEW, activeView: views.length } });
    setUrl({
      query: NEW_VIEW.query,
      variables: NEW_VIEW.variables,
      headers: NEW_VIEW.headers,
    });
  }, [setUrl, views.length]);

  useEffect(() => {
    // mutating current view object when user typing in the editor
    // and saving the view array in the localStorage
    // mutating in order not to re-render every time user typing

    const query = readUrl(urlParams.QUERY);
    const headers = readUrl(urlParams.HEADERS);
    const variables = readUrl(urlParams.VARIABLES);

    views[activeView].query = query;
    views[activeView].headers = headers;
    views[activeView].variables = variables;

    localStorage.setItem(localStorageKeys.VIEWS, JSON.stringify(views));
  }, [activeView, readUrl, views]);

  const value = useMemo<TViewContext>(() => {
    return {
      views,
      activeView,
      handleActiveView,
      handleAddView,
    };
  }, [activeView, handleActiveView, handleAddView, views]);

  return <ViewContext.Provider value={value}>{children}</ViewContext.Provider>;
};

export default ViewProvider;
