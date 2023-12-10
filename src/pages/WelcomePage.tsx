import { Link } from 'react-router-dom';

export default function LoginPage() {
  return (
    <section>
      Here is my fancy welcome page!
      <div className="flex flex-col">
        <Link to="../login">login</Link>
        <Link to="../mainpage">main page</Link>
      </div>
    </section>
  );
}
