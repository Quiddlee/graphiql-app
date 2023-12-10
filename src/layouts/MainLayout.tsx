import { Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
    <main>
      <header>Here will be header</header>
      <section>
        <Outlet />
      </section>
      <footer>Here will be footer</footer>
    </main>
  );
}
