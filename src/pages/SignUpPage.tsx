import { useState } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { TextFieldType } from '@material/web/textfield/outlined-text-field';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import PassVisibilityIcon from '@/components/loginReg/PassVisibilityIcon';
import AUTH_ERRORS from '@/shared/constants/authErrors';
import ROUTES from '@/shared/constants/routes';
import { regValidationSchema } from '@/shared/constants/validationSchema';
import useAuth from '@/shared/Context/authHook';
import { useLanguage } from '@/shared/Context/hooks';
import notationLocalizer from '@/shared/helpers/notationLocalizer';
import switchPassType from '@/shared/helpers/switchPassType';
import { ErrorType, TextInputProps } from '@/shared/types';
import OutlinedTextField from '@/shared/ui/OutlinedTextField';
import Footer from '@components/Footer/Footer';
import SubmitBtn from '@components/loginReg/SubmitBtn';
import AnimatedLink from '@pages/WelcomePage/ui/AnimatedLink';
import useScrollbar from '@shared/lib/hooks/useScrollbar';

export default function SignUpPage() {
  const [passType, setPassType] = useState('password');
  const [confPassType, setConfPassType] = useState('password');
  const { createAccount } = useAuth();
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
  const containerRef = useScrollbar();

  async function onSubmit({ email, password }: { email: string; password: string }) {
    try {
      const isSuccess = await createAccount(email, password);
      if (isSuccess) {
        reset();
      }
      return undefined;
    } catch (e) {
      if ((e as ErrorType).code === AUTH_ERRORS.EMAIL_IN_USE)
        return toast(<p className="text-center">{notationLocalizer(language, 'code10')}</p>);
      return toast(<p className="text-center">{notationLocalizer(language, 'code11')}</p>);
    }
  }

  return (
    <section className="grid h-screen w-full animate-fade-in-section items-center justify-center gap-6 py-4 ease-emphasized-decelerate sm:mx-5 sm:py-8">
      <article
        ref={containerRef}
        className="h-full max-h-[524px] w-full overflow-auto rounded-[30px] bg-surface-container px-7 py-[60px] sm:min-w-[560px] sm:px-20"
      >
        <h1
          style={{
            viewTransitionName: 'title-auth',
          }}
          className="text-center text-2xl font-[400] text-on-surface"
        >
          {title}
        </h1>
        <h2
          style={{
            viewTransitionName: 'subtitle-auth',
          }}
          className="mt-3 text-center text-base font-[400] text-on-surface-variant"
        >
          {subtitle}
        </h2>
        <form noValidate className="mt-8" onSubmit={handleSubmit(onSubmit)}>
          <div className="relative">
            <OutlinedTextField
              style={{
                viewTransitionName: 'email',
              }}
              className="w-full"
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
              style={{
                viewTransitionName: 'password',
              }}
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
          <div className="relative mt-12">
            <OutlinedTextField
              className="w-full"
              {...(register('confirmPassword') as TextInputProps)}
              type={confPassType as TextFieldType}
              placeholder={confPassPlaceHold}
              label={confPassPlaceHold}
            >
              <PassVisibilityIcon onClick={() => setConfPassType((prev) => switchPassType(prev))} />
            </OutlinedTextField>
            <p className="absolute left-4 top-[62px] text-sm font-[400] text-on-surface">
              {notationLocalizer(language, errors.confirmPassword?.message)}
            </p>
          </div>
          <SubmitBtn
            style={{
              viewTransitionName: 'action',
            }}
            className="mt-[52px] w-full"
            disabled={!isValid}
            type="submit"
          >
            {btnTitle}
          </SubmitBtn>
        </form>
        <p className="mt-8 text-center text-sm font-[400] text-on-surface-variant">
          {linkClue}{' '}
          <AnimatedLink className="text-primary" to={`/${ROUTES.AUTH}/${ROUTES.LOGIN}`}>
            {linkTitle}
          </AnimatedLink>
        </p>
      </article>
      <Footer className="self-end" />
    </section>
  );
}
