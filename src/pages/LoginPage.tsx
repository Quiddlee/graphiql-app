import { useState } from 'react';

import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';

type ErrorType = {
  code: string;
};

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [myUser, setMyUser] = useState({});

  function PrepareCookie(_email: string) {
    const userEmail = `userEmail=${_email}`;
    const maxAge = 'max-age=3600';
    return `${userEmail}; ${maxAge}`;
  }
  function showCookie() {
    const cookies = document.cookie.split(';');
    let userEmail = '';

    cookies.forEach((cookie) => {
      const [name, value] = cookie.trim().split('=');
      if (name === 'userEmail') {
        userEmail = value; // Found the userEmail cookie, assign its value
        return null; // Exit the loop after finding the cookie
      }
      return null;
    });

    return userEmail;
  }
  function deleteCookie() {
    document.cookie = 'userEmail=""; max-age=-1';
  }
  async function handleClick() {
    const auth = getAuth();
    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, pass);
      if (user) {
        document.cookie = PrepareCookie(email);
        setMyUser({
          email: user.email,
          id: user.uid,
          token: user.refreshToken,
        });
      }
      return null;
    } catch (e) {
      if ((e as ErrorType).code === 'auth/email-already-in-use') return console.log('Error, email is occupied');
      return console.log('Something went wrong...');
    }
  }
  async function handleLogin() {
    const auth = getAuth();
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, pass);
      if (user) {
        document.cookie = PrepareCookie(email);
        setMyUser({
          email: user.email,
          id: user.uid,
          token: user.refreshToken,
        });
      }
      return null;
    } catch (e) {
      if ((e as ErrorType).code === 'auth/invalid-email') return console.log('Error, wrong email');
      if ((e as ErrorType).code === 'auth/invalid-credential') {
        return console.log('Error, wrong password');
      }
      return console.log('Something went wrong...');
    }
  }
  async function singOut() {
    const auth = getAuth();
    try {
      const res = await auth.signOut();
      deleteCookie();
      setMyUser({});
      console.log(`Logged out:${res}`);
    } catch (e) {
      console.log(`error occured:${e}`);
    }
  }
  return (
    <section>
      Here is my fancy login page!
      <div>
        <h2>Here is new user creator:</h2>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" />
        <input type="password" value={pass} onChange={(e) => setPass(e.target.value)} placeholder="password" />
        <button type="button" onClick={() => handleClick()}>
          Register new User
        </button>
        <button type="button" onClick={() => console.log(myUser)}>
          Show user
        </button>
        <button type="button" onClick={() => handleLogin()}>
          Login User
        </button>
        <button type="button" onClick={() => singOut()}>
          Sign out
        </button>
        <button type="button" onClick={() => console.log(showCookie())}>
          Show cookie
        </button>
      </div>
    </section>
  );
}
