import AnimatedLink from '@pages/WelcomePage/ui/AnimatedLink';
import Button from '@pages/WelcomePage/ui/Button';
import ROUTES from '@shared/constants/routes';
import useAuth from '@shared/Context/authHook';
import { useLanguage } from '@shared/Context/hooks';

const StartUsingNow = () => {
  const { isAuth } = useAuth();
  const { translation } = useLanguage();

  const buttonText = isAuth ? translation.welcome.start.buttonApp : translation.welcome.start.buttonAuth;
  const link = isAuth ? ROUTES.MAIN : `/${ROUTES.AUTH}/${ROUTES.SIGNUP}`;

  return (
    <section>
      <article className="grid h-[480px] w-full grid-cols-1 items-center justify-center justify-items-center rounded-full bg-gradient-to-br from-[#F97583] to-[#381E72] p-20">
        <h2 className="text-center text-7.5xl font-light leading-h2">
          {translation.welcome.start.title.start} <br /> {translation.welcome.start.title.now}
        </h2>
        <AnimatedLink to={link}>
          <Button>{buttonText}</Button>
        </AnimatedLink>
      </article>
    </section>
  );
};

export default StartUsingNow;
