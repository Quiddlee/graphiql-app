import { createContext, Dispatch, ReactNode, SetStateAction, useCallback, useMemo, useState } from 'react';

import jsonFormater from '@/shared/lib/helpers/jsonFormatter';

type AppContextType = {
  currentResponse: string;
  updateCurrentResponse: (response: string) => void;
  prettifyEditors: (isPrettified: boolean) => void;
  prettify: boolean;
  currEndpoint: string;
  setCurrEndpoint: Dispatch<SetStateAction<string>>;
};

export const AppContext = createContext<AppContextType>({} as AppContextType);

export default function AppContextProvider({ children }: { children: ReactNode }) {
  const [currEndpoint, setCurrEndpoint] = useState('https://rickandmortyapi.com/graphql');
  const [currentResponse, setCurrentResponse] = useState<string>('');
  const [prettify, setPrettify] = useState<boolean>(false);

  const prettifyEditors = useCallback((isPrettified: boolean) => {
    setPrettify(isPrettified);
  }, []);

  const updateCurrentResponse = useCallback((response: string) => {
    const formattedResponse = jsonFormater(response);
    setCurrentResponse(formattedResponse);
  }, []);

  const contextValue = useMemo(
    () => ({ currentResponse, updateCurrentResponse, prettifyEditors, prettify, currEndpoint, setCurrEndpoint }),
    [currentResponse, updateCurrentResponse, prettifyEditors, prettify, currEndpoint, setCurrEndpoint],
  );

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
}
