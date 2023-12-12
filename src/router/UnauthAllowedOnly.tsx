import { Navigate } from 'react-router-dom';

import useAuth from '@/shared/Context/authHook';

const UnauthAllowedOnly = ({ children }: { children: JSX.Element }) => {
  const { isAuth } = useAuth();
  if (isAuth) return <Navigate to="/main" replace />;
  return children;
};

export default UnauthAllowedOnly;
