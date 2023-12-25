import { createContext, ReactNode, useCallback, useMemo, useState } from 'react';

import responseFormatter from '@/components/ResponseViewer/lib/responseFormatter';

type AppContextType = {
  currentResponse: string;
  updateCurrentResponse: (response: string) => void;
  prettifyEditors: (isPrettified: boolean) => void;
  prettify: boolean;
};

export const AppContext = createContext<AppContextType>({} as AppContextType);

export default function AppContextProvider({ children }: { children: ReactNode }) {
  const [currentResponse, setCurrentResponse] = useState<string>('');
  const [prettify, setPrettify] = useState<boolean>(false);

  const prettifyEditors = useCallback((isPrettified: boolean) => {
    setPrettify(isPrettified);
  }, []);

  const updateCurrentResponse = useCallback((response: string) => {
    const formattedResponse = responseFormatter(response);
    setCurrentResponse(formattedResponse);
  }, []);

  const contextValue = useMemo(
    () => ({ currentResponse, updateCurrentResponse, prettifyEditors, prettify }),
    [currentResponse, updateCurrentResponse, prettifyEditors, prettify],
  );

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
}
