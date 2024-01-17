type PropsType = { children: JSX.Element | JSX.Element[] };

const DocsModalLayout = ({ children }: PropsType) => {
  return (
    <section
      style={{
        viewTransitionName: 'docs',
      }}
      className="relative z-20 h-screen w-[270px] cursor-auto p-3 sm:w-[420px]"
    >
      {children}
    </section>
  );
};

export default DocsModalLayout;
