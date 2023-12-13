import { Navigate } from 'react-router-dom';

import ROUTES from '@/shared/constants/routes';
import useAuth from '@/shared/Context/authHook';

const AuthAllowedOnly = ({ children }: { children: JSX.Element }) => {
  const { isAuth } = useAuth();
  if (!isAuth) return <Navigate to={`/${ROUTES.AUTH}/${ROUTES.LOGIN}`} replace />;
  return children;
};

export default AuthAllowedOnly;
