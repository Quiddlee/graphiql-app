import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <main className="mx-auto flex min-h-[100dvh] max-w-[1440px] flex-col">
      <section className="flex h-full w-full grow items-center justify-center">
        <Outlet />
      </section>
      <footer className="grow-0">Here will be footer</footer>
    </main>
  );
};

export default MainLayout;
