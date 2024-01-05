import { useNavigate } from 'react-router-dom';

import Button from '@pages/WelcomePage/ui/Button';
import ROUTES from '@shared/constants/routes';

const StartUsingNow = () => {
  const navigate = useNavigate();

  return (
    <section>
      <article className="grid h-[480px] w-full grid-cols-1 items-center justify-center justify-items-center rounded-full bg-gradient-to-br from-[#F97583] to-[#381E72] p-20">
        <h2 className="text-center text-7.5xl font-light leading-h2">
          Start Using <br /> GraphiQL Now
        </h2>
        <Button
          onClick={() => {
            navigate(ROUTES.MAIN);
          }}
        >
          GraphiQL App
        </Button>
      </article>
    </section>
  );
};

export default StartUsingNow;
