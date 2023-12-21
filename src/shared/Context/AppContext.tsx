import { createContext, ReactNode, useCallback, useMemo, useState } from 'react';

type AppContextType = {
  currentResponse: string;
  updateCurrentResponse: (response: string) => void;
};

export const AppContext = createContext<AppContextType>({} as AppContextType);

export default function AppContextProvider({ children }: { children: ReactNode }) {
  const [currentResponse, setCurrentResponse] = useState<string>('');

  const updateCurrentResponse = useCallback((response: string) => {
    setCurrentResponse(response);
  }, []);

  const contextValue = useMemo(
    () => ({ currentResponse, updateCurrentResponse }),
    [currentResponse, updateCurrentResponse],
  );

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
}
