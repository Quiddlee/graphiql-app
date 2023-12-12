import { createContext, useCallback, useMemo, useState } from 'react';

import { isAuthCookie } from '@shared/helpers/cookieHandlers';

type AuthApi = {
  isAuth: boolean;
  switchAuth: () => void;
};

export const AuthContext = createContext({} as AuthApi);

const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const authCookie = isAuthCookie();
  const [isAuth, setIsAuth] = useState(authCookie);

  const switchAuth = useCallback(() => {
    setIsAuth((prev) => !prev);
  }, [setIsAuth]);

  const authApi = useMemo(
    () => ({
      isAuth,
      switchAuth,
    }),
    [isAuth, switchAuth],
  );
  return <AuthContext.Provider value={authApi}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
