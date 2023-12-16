import { useState } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { TextFieldType } from '@material/web/textfield/outlined-text-field';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

import FormInput from '@/components/loginReg/FormInput';
import PassVisibilityIcon from '@/components/loginReg/PassVisibilityIcon';
import SubmitBtn from '@/components/loginReg/SubmitBtn';
import ROUTES from '@/shared/constants/routes';
import { regValidationSchema } from '@/shared/constants/validationSchema';
import useAuth from '@/shared/Context/authHook';
import useLanguage from '@/shared/Context/hooks';
import errorLocalizer from '@/shared/helpers/errorLocalizer';
import switchPassType from '@/shared/helpers/switchPassType';
import toastifyNotation from '@/shared/helpers/toastifyNotation';
import { ErrorType, TextInputProps } from '@/shared/types';

export default function SignUpPage() {
  const [passType, setPassType] = useState('password');
  const [confPassType, setConfPassType] = useState('password');
  const navigate = useNavigate();
  const { logInAuth } = useAuth();
  const { translation, language } = useLanguage();
  const { title, subtitle, emailPlaceHold, passPlaceHold, btnTitle, linkClue, linkTitle, confPassPlaceHold } =
    translation.signUpPage;
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
        reset();
        logInAuth(user.email as string);
        navigate(`/${ROUTES.MAIN}`);
      }
      return null;
    } catch (e) {
      if ((e as ErrorType).code === 'auth/email-already-in-use') return toastifyNotation('Error, email is occupied');
      return toastifyNotation('Unexpected error have happened...');
    }
  }

  return (
    <section className="mx-5 flex items-center justify-center">
      <article className="w-[560px] rounded-[30px] bg-surface-container px-7 py-[60px] sm:px-20">
        <h1 className="text-center text-2xl font-[400] text-on-surface">{title}</h1>
        <h2 className="mt-3 text-center text-base font-[400] text-on-surface-variant">{subtitle}</h2>
        <form noValidate className="mt-8" onSubmit={handleSubmit(onSubmit)}>
          <div className="relative">
            <FormInput
              style={{ width: '100%' }}
              {...(register('email') as TextInputProps)}
              type="email"
              placeholder={emailPlaceHold}
            />
            <p className="absolute left-4 top-[62px] text-sm font-[400] text-on-surface">
              {errorLocalizer(language, errors.email?.message)}
            </p>
          </div>
          <div className="relative mt-12">
            <FormInput
              style={{ width: '100%' }}
              {...(register('password') as TextInputProps)}
              type={passType as TextFieldType}
              placeholder={passPlaceHold}
            >
              <PassVisibilityIcon onClick={() => setPassType((prev) => switchPassType(prev))} />
            </FormInput>
            <p className="absolute left-4 top-[62px] text-sm font-[400] text-on-surface">
              {errorLocalizer(language, errors.password?.message)}
            </p>
          </div>
          <div className="relative mt-12">
            <FormInput
              style={{ width: '100%' }}
              {...(register('confirmPassword') as TextInputProps)}
              type={confPassType as TextFieldType}
              placeholder={confPassPlaceHold}
            >
              <PassVisibilityIcon onClick={() => setConfPassType((prev) => switchPassType(prev))} />
            </FormInput>
            <p className="absolute left-4 top-[62px] text-sm font-[400] text-on-surface">
              {errorLocalizer(language, errors.confirmPassword?.message)}
            </p>
          </div>
          <SubmitBtn style={{ width: '100%', marginTop: '52px' }} disabled={!isValid} type="submit">
            {btnTitle}
          </SubmitBtn>
        </form>
        <p className="mt-8 text-center text-sm font-[400] text-on-surface-variant">
          {linkClue}{' '}
          <Link className="text-primary" to={`/${ROUTES.AUTH}/${ROUTES.LOGIN}`}>
            {linkTitle}
          </Link>
        </p>
      </article>
    </section>
  );
}
