type PropsType = { children: JSX.Element | JSX.Element[] };

const DocsModalLayout = ({ children }: PropsType) => {
  return (
    <section className="relative z-20 h-[100dvh] w-[270px] cursor-auto rounded-r-[28px] bg-surface p-3 sm:w-[420px]">
      {children}
    </section>
  );
};

export default DocsModalLayout;
