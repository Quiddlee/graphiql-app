import { yupResolver } from '@hookform/resolvers/yup';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

import { regValidationSchema } from '@/shared/constants/validationSchema';
import { prepareCookie } from '@/shared/helpers/cookieHandlers';
import toastifyNotation from '@/shared/helpers/toastifyNotation';
import { ErrorType } from '@/shared/types';

export default function SignUpPage() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    resolver: yupResolver(regValidationSchema),
    mode: 'all',
  });

  async function onSubmit({ email, password }: { email: string; password: string }) {
    const auth = getAuth();
    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      if (user) {
        document.cookie = prepareCookie(email);
      }
      reset();
      navigate('/');
      return null;
    } catch (e) {
      if ((e as ErrorType).code === 'auth/email-already-in-use') return toastifyNotation('Error, email is occupied');
      return toastifyNotation('Unexpected error have happened...');
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p>Is it sing up page</p>
        <div>
          <input {...register('email')} type="email" placeholder="Email..." />
          <p>{errors.email?.message}</p>
        </div>
        <div>
          <input {...register('password')} type="password" placeholder="Password..." />
          <p>{errors.password?.message}</p>
        </div>
        <div>
          <input {...register('confirmPassword')} type="password" placeholder="Confirm pass..." />
          <p>{errors.confirmPassword?.message}</p>
        </div>
        <button disabled={!isValid} className="bg-red-500 p-2 disabled:bg-gray-500" type="submit">
          Sing up
        </button>
      </form>
      <Link to="/auth/login">go to login</Link>
    </>
  );
}
