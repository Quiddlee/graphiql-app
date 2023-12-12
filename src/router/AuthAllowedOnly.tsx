import { Navigate } from 'react-router-dom';

import useAuth from '@/shared/Context/authHook';

const AuthAllowedOnly = ({ children }: { children: JSX.Element }) => {
  const { isAuth } = useAuth();
  if (!isAuth) return <Navigate to="/auth/login" replace />;
  return children;
};

export default AuthAllowedOnly;
