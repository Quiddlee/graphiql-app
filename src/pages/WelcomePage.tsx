import { Link } from 'react-router-dom';

const WelcomePage = () => {
  return (
    <section>
      Here is my fancy welcome page!
      <div className="flex flex-col">
        <Link to="../login">login</Link>
        <Link to="../mainpage">main page</Link>
      </div>
    </section>
  );
};

export default WelcomePage;
