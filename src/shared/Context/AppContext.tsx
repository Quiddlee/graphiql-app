import { createContext, Dispatch, ReactNode, SetStateAction, useCallback, useMemo, useState } from 'react';

import jsonFormater from '@/shared/lib/helpers/jsonFormatter';

import { DocsSchemaType } from '../types';

type AppContextType = {
  currentResponse: string;
  updateCurrentResponse: (response: string) => void;
  prettifyEditors: (isPrettified: boolean) => void;
  prettify: boolean;
  currEndpoint: string;
  setCurrEndpoint: Dispatch<SetStateAction<string>>;
  setEndpointSchema: Dispatch<SetStateAction<DocsSchemaType>>;
  endpointSchema: DocsSchemaType;
};

export const AppContext = createContext<AppContextType>({} as AppContextType);

export default function AppContextProvider({ children }: { children: ReactNode }) {
  const [currEndpoint, setCurrEndpoint] = useState('https://rickandmortyapi.com/graphql');
  const [endpointSchema, setEndpointSchema] = useState(null as unknown as DocsSchemaType);
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
    () => ({
      currentResponse,
      updateCurrentResponse,
      prettifyEditors,
      prettify,
      currEndpoint,
      setCurrEndpoint,
      endpointSchema,
      setEndpointSchema,
    }),
    [
      currentResponse,
      updateCurrentResponse,
      prettifyEditors,
      prettify,
      currEndpoint,
      setCurrEndpoint,
      endpointSchema,
      setEndpointSchema,
    ],
  );

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
}
