import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <main className="mx-auto max-w-[1440px]">
      <header>Here will be header</header>
      <section>
        <Outlet />
      </section>
      <footer>Here will be footer</footer>
    </main>
  );
};

export default MainLayout;
