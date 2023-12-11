export default function LoginPage() {
  // async function onSubmit({ email, password }: { email: string; password: string }) {
  //   const auth = getAuth();
  //   try {
  //     const { user } = await createUserWithEmailAndPassword(auth, email, password);
  //     if (user) {
  //       document.cookie = PrepareCookie(email);
  //       setMyUser({
  //         email: user.email,
  //         id: user.uid,
  //         token: user.refreshToken,
  //       });
  //     }
  //     reset();
  //     navigate('/');
  //     return null;
  //   } catch (e) {
  //     if ((e as ErrorType).code === 'auth/email-already-in-use') return console.log('Error, email is occupied');
  //     return console.log('Something went wrong...');
  //   }
  // }
  // async function handleLogin() {
  //   const auth = getAuth();
  //   try {
  //     const { user } = await signInWithEmailAndPassword(auth, email, pass);
  //     if (user) {
  //       document.cookie = PrepareCookie(email);
  //       setMyUser({
  //         email: user.email,
  //         id: user.uid,
  //         token: user.refreshToken,
  //       });
  //     }
  //     return null;
  //   } catch (e) {
  //     if ((e as ErrorType).code === 'auth/invalid-email') return console.log('Error, wrong email');
  //     if ((e as ErrorType).code === 'auth/invalid-credential') {
  //       return console.log('Error, wrong password');
  //     }
  //     return console.log('Something went wrong...');
  //   }
  // }
  // async function singOut() {
  //   const auth = getAuth();
  //   try {
  //     const res = await auth.signOut();
  //     console.log(`Logged out:${res}`);
  //   } catch (e) {
  //     console.log(`error occured:${e}`);
  //   }
  // }
  return (
    <section>
      Here is my fancy login page!
      <div>
        <h2>Here is new user creator:</h2>
      </div>
    </section>
  );
}
