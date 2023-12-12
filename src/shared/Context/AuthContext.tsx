import { createContext, useCallback, useMemo, useState } from 'react';

import { deleteAuthCookie, isAuthCookie, prepareAuthCookie } from '@shared/helpers/cookieHandlers';

type AuthApi = {
  isAuth: boolean;
  logInAuth: (email: string) => void;
  logOutAuth: () => void;
};

export const AuthContext = createContext({} as AuthApi);

const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const authCookie = isAuthCookie();
  const [isAuth, setIsAuth] = useState(authCookie);

  const logInAuth = useCallback((email: string) => {
    document.cookie = prepareAuthCookie(email as string);
    setIsAuth(true);
  }, []);

  const logOutAuth = useCallback(() => {
    deleteAuthCookie();
    setIsAuth(false);
  }, []);

  const authApi = useMemo(
    () => ({
      isAuth,
      logInAuth,
      logOutAuth,
    }),
    [isAuth, logInAuth, logOutAuth],
  );
  return <AuthContext.Provider value={authApi}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
