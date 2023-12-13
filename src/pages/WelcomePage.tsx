import { Link } from 'react-router-dom';

import ROUTES from '@/shared/constants/routes';

const WelcomePage = () => {
  return (
    <section>
      Here is my fancy welcome page!
      <div className="flex flex-col">
        <Link to={`/${ROUTES.AUTH}/${ROUTES.LOGIN}`}>login</Link>
        <Link to={`/${ROUTES.MAIN}`}>main page</Link>
      </div>
    </section>
  );
};

export default WelcomePage;
