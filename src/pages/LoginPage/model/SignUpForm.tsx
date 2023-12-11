import { yupResolver } from '@hookform/resolvers/yup';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { regValidationSchema } from '@/shared/constants/validationSchema';
import { prepareCookie } from '@/shared/helpers/cookieHandlers';
import { ErrorType } from '@/shared/types';

export default function SignUpForm() {
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
      if ((e as ErrorType).code === 'auth/email-already-in-use') return console.log('Error, email is occupied');
      return console.log('Something went wrong...');
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input {...register('email')} type="email" placeholder="email" />
        <p>{errors.email?.message}</p>
      </div>
      <div>
        <input {...register('password')} type="password" placeholder="password" />
        <p>{errors.password?.message}</p>
      </div>
      <div>
        <input {...register('password')} type="password" placeholder="password" />
        <p>{errors.confirmPassword?.message}</p>
      </div>
      <button disabled={!isValid} className="bg-red-500 p-2 disabled:bg-gray-500" type="submit">
        Register new User
      </button>
    </form>
  );
}
