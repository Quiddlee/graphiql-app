import { createContext, useCallback, useEffect, useMemo, useState } from 'react';

import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

import { deleteAuthCookie, isAuthCookie, prepareAuthCookie } from '@shared/helpers/cookieHandlers';

import ROUTES from '../constants/routes';

type AuthApi = {
  isAuth: boolean;
  logIn: (email: string, password: string) => Promise<boolean>;
  createAccount: (email: string, password: string) => Promise<boolean>;
  logOut: () => void;
};

export const AuthContext = createContext({} as AuthApi);

const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const authCookie = isAuthCookie();
  const auth = getAuth();
  const navigate = useNavigate();
  const [isAuth, setIsAuth] = useState(authCookie);

  const setAuth = useCallback(
    (email: string) => {
      document.cookie = prepareAuthCookie(email as string);
      setIsAuth(true);
      navigate(`/${ROUTES.MAIN}`);
    },
    [navigate],
  );

  const logIn = useCallback(
    async (email: string, password: string) => {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      if (user) {
        setAuth(user.email as string);
        return true;
      }
      return false;
    },
    [auth, setAuth],
  );

  const createAccount = useCallback(
    async (email: string, password: string) => {
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      if (user) {
        setAuth(user.email as string);
        return true;
      }
      return false;
    },
    [auth, setAuth],
  );

  const logOut = useCallback(() => {
    signOut(auth);
    deleteAuthCookie();
    setIsAuth(false);
    navigate(ROUTES.WELCOME_PAGE);
  }, [auth, navigate]);

  const authApi = useMemo(
    () => ({
      isAuth,
      logIn,
      createAccount,
      logOut,
    }),
    [isAuth, logIn, logOut, createAccount],
  );

  useEffect(() => {
    if (isAuth) {
      const checker = setInterval(() => {
        const isStillAuth = isAuthCookie();
        if (!isStillAuth) {
          logOut();
        }
      }, 30000);
      return () => clearInterval(checker);
    }
    return undefined;
  }, [isAuth, logOut]);

  return <AuthContext.Provider value={authApi}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
