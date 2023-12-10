import { useLanguage } from './shared/Context/LanguageContext';

function App() {
  const { language, changeLanguage } = useLanguage();

  return (
    <div className="h-[100dvh] bg-[green] text-3xl">
      <div>Hello, I&apos;m the future graphiql app!</div>
      <div>{language}</div>
      <button type="button" onClick={changeLanguage}>
        click
      </button>
    </div>
  );
}

export default App;
