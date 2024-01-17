import { Link } from 'react-router-dom';

import ROUTES from '@/shared/constants/routes';

const Page404 = () => {
  return (
    <section className="flex h-full w-full items-center justify-center">
      <div className="mx-4 w-full max-w-[500px] rounded-md bg-surface-container p-8 text-center text-xl text-on-surface">
        <p className="leading-10">
          The route you are trying to reach does not exist <span className="text-4xl">🤷‍♂️</span>
        </p>
        <p>
          Try to go{' '}
          <Link className="text-primary" to={ROUTES.WELCOME_PAGE}>
            Home
          </Link>{' '}
          instead
        </p>
      </div>
    </section>
  );
};

export default Page404;
