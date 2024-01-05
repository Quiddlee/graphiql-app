const ErrorFallback = () => {
  return (
    <div className="flex h-[100dvh] w-full items-center justify-center bg-surface">
      <div className="mx-6 max-w-[500px] rounded-md bg-surface-container p-6 text-center text-lg text-on-surface">
        Somehow something managed to crash our app...
        <br />
        <br /> We suggest you to reload the page to continue using the app.
      </div>
    </div>
  );
};

export default ErrorFallback;
