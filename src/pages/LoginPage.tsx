import { yupResolver } from '@hookform/resolvers/yup';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

import { loginValidationSchema } from '@/shared/constants/validationSchema';
import useAuth from '@/shared/Context/authHook';
import { prepareAuthCookie } from '@/shared/helpers/cookieHandlers';
import toastifyNotation from '@/shared/helpers/toastifyNotation';
import { ErrorType } from '@/shared/types';

export default function LoginPage() {
  const navigate = useNavigate();
  const { switchAuth } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    resolver: yupResolver(loginValidationSchema),
    mode: 'all',
  });

  async function onSubmit({ email, password }: { email: string; password: string }) {
    const auth = getAuth();
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      if (user) {
        document.cookie = prepareAuthCookie(email);
      }
      reset();
      switchAuth();
      navigate('/main');
      return null;
    } catch (e) {
      if ((e as ErrorType).code === 'auth/invalid-email') return toastifyNotation('Error, wrong email');
      if ((e as ErrorType).code === 'auth/invalid-credential') return toastifyNotation('Error, wrong password');
      return toastifyNotation('Unexpected error have happened...');
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p>It is login page</p>
        <div>
          <input {...register('email')} type="email" placeholder="Email..." />
          <p>{errors.email?.message}</p>
        </div>
        <div>
          <input {...register('password')} type="password" placeholder="Password..." />
          <p>{errors.password?.message}</p>
        </div>
        <button disabled={!isValid} className="bg-red-500 p-2 disabled:bg-gray-500" type="submit">
          Log in
        </button>
      </form>
      <Link to="/auth/signup">got to signup</Link>
    </>
  );
}
