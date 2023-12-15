import { yupResolver } from '@hookform/resolvers/yup';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

import ROUTES from '@/shared/constants/routes';
import { loginValidationSchema } from '@/shared/constants/validationSchema';
import useAuth from '@/shared/Context/authHook';
import useLanguage from '@/shared/Context/hooks';
import errorLocalizer from '@/shared/helpers/errorLocalizer';
import toastifyNotation from '@/shared/helpers/toastifyNotation';
import { ErrorType, TextInputProps } from '@/shared/types';
import FormInput from '@components/loginReg/FormInput';
import SubmitBtn from '@components/loginReg/SubmitBtn';

export default function LoginPage() {
  const navigate = useNavigate();
  const { translation, language } = useLanguage();
  const { title, subtitle, emailPlaceHold, passPlaceHold, btnTitle, linkClue, linkTitle } = translation.loginPage;
  const { logInAuth } = useAuth();
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
        logInAuth(user.email as string);
        reset();
        navigate(`/${ROUTES.MAIN}`);
      }
      return null;
    } catch (e) {
      if ((e as ErrorType).code === 'auth/invalid-email') return toastifyNotation('Error, wrong email');
      if ((e as ErrorType).code === 'auth/invalid-credential') return toastifyNotation('Error, wrong password');
      return toastifyNotation('Unexpected error have happened...');
    }
  }

  return (
    <section className="mx-5 flex items-center justify-center">
      <article className="w-[560px] rounded-[30px] bg-surface-container px-7 py-[60px] sm:px-20">
        <h1 className="text-center text-2xl font-[400] text-on-surface">{title}</h1>
        <h2 className="mt-3 text-center text-base font-[400] text-on-surface-variant">{subtitle}</h2>
        <form className="mt-8" onSubmit={handleSubmit(onSubmit)}>
          <div className="relative">
            <FormInput
              style={{ width: '100%' }}
              {...(register('email') as TextInputProps)}
              placeholder={emailPlaceHold}
              type="email"
            />
            <p className="absolute left-4 top-[62px] text-sm font-[400] text-on-surface">
              {errorLocalizer(language, errors.email?.message)}
            </p>
          </div>
          <div className="relative mt-12">
            <FormInput
              style={{ width: '100%' }}
              {...(register('password') as TextInputProps)}
              type="password"
              placeholder={passPlaceHold}
            />
            <p className="absolute left-4 top-[62px] text-sm font-[400] text-on-surface">
              {errorLocalizer(language, errors.password?.message)}
            </p>
          </div>
          <SubmitBtn style={{ width: '100%', marginTop: '52px' }} disabled={!isValid}>
            {btnTitle}
          </SubmitBtn>
        </form>
        <p className="mt-8 text-center text-sm font-[400] text-on-surface-variant">
          {linkClue}{' '}
          <Link className="text-primary" to={`/${ROUTES.AUTH}/${ROUTES.SIGNUP}`}>
            {linkTitle}
          </Link>
        </p>
      </article>
    </section>
  );
}
