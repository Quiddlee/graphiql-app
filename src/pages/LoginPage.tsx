import { useState } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { TextFieldType } from '@material/web/textfield/outlined-text-field';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import PassVisibilityIcon from '@/components/loginReg/PassVisibilityIcon';
import AUTH_ERRORS from '@/shared/constants/authErrors';
import ROUTES from '@/shared/constants/routes';
import { loginValidationSchema } from '@/shared/constants/validationSchema';
import useAuth from '@/shared/Context/authHook';
import { useLanguage } from '@/shared/Context/hooks';
import notationLocalizer from '@/shared/helpers/notationLocalizer';
import switchPassType from '@/shared/helpers/switchPassType';
import { ErrorType, TextInputProps } from '@/shared/types';
import OutlinedTextField from '@/shared/ui/OutlinedTextField';
import SubmitBtn from '@components/loginReg/SubmitBtn';

export default function LoginPage() {
  const [passType, setPassType] = useState('password');
  const { translation, language } = useLanguage();
  const { title, subtitle, emailPlaceHold, passPlaceHold, btnTitle, linkClue, linkTitle } = translation.loginPage;
  const { logIn } = useAuth();

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
    try {
      const isSuccess = await logIn(email, password);
      if (isSuccess) {
        reset();
      }
      return undefined;
    } catch (e) {
      if ((e as ErrorType).code === AUTH_ERRORS.INVALID_EMAIL) {
        return toast(<p className="text-center">{notationLocalizer(language, 'code8')}</p>);
      }
      if ((e as ErrorType).code === AUTH_ERRORS.INVALID_PASS) {
        return toast(<p className="text-center">{notationLocalizer(language, 'code9')}</p>);
      }
      return toast(<p className="text-center">{notationLocalizer(language, 'code11')}</p>);
    }
  }

  return (
    <section className="mx-5 flex items-center justify-center">
      <article className="w-[560px] rounded-[30px] bg-surface-container px-7 py-[60px] sm:px-20">
        <h1 className="text-center text-2xl font-[400] text-on-surface">{title}</h1>
        <h2 className="mt-3 text-center text-base font-[400] text-on-surface-variant">{subtitle}</h2>
        <form noValidate className="mt-8" onSubmit={handleSubmit(onSubmit)}>
          <div className="relative">
            <OutlinedTextField
              style={{ width: '100%' }}
              {...(register('email') as TextInputProps)}
              type="email"
              placeholder={emailPlaceHold}
              label={emailPlaceHold}
            />
            <p className="absolute left-4 top-[62px] text-sm font-[400] text-on-surface">
              {notationLocalizer(language, errors.email?.message)}
            </p>
          </div>
          <div className="relative mt-12">
            <OutlinedTextField
              className="w-full"
              {...(register('password') as TextInputProps)}
              type={passType as TextFieldType}
              placeholder={passPlaceHold}
              label={passPlaceHold}
            >
              <PassVisibilityIcon onClick={() => setPassType((prev) => switchPassType(prev))} />
            </OutlinedTextField>
            <p className="absolute left-4 top-[62px] text-sm font-[400] text-on-surface">
              {notationLocalizer(language, errors.password?.message)}
            </p>
          </div>
          <SubmitBtn className="mt-[52px] w-full" disabled={!isValid}>
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
