/** @format */
import React, { ChangeEvent, FormEvent, useCallback, useRef, useState } from 'react';
import InputText from '../LoginForm/inputLG';

const LoginForm = () => {
  const [form, setForm] = useState({
    username: '',
    password: '',
    email: '',
  });
  const [error, setError] = useState('');

  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>, inputType: string) => {
    setForm((prevForm) => ({
      ...prevForm,
      [inputType]: e.target.value,
    }));
  }, []);

  const validateEmail = (email: string) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const onSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;
    const email = emailRef.current?.value;

    if (!username || !password || !email) {
      setError('Username, password, and email cannot be empty');
      return;
    }

    if (!validateEmail(email)) {
      setError('Email is not correct');
      return;
    }

    setError('');
    console.log('Submitted Username:', username);
    console.log('Submitted Password:', password);
    console.log('Submitted Email:', email);
  }, []);

  return (
    <div>
      <h1>Login Form</h1>
      <form onSubmit={onSubmit}>
        <InputText
          label="Username"
          value={form.username}
          onChange={(e) => onChange(e, 'username')}
        />
        <InputText
          label="Password"
          value={form.password}
          onChange={(e) => onChange(e, 'password')}
        />
        <InputText
          label="Email"
          value={form.email}
          onChange={(e) => onChange(e, 'email')}
        />
        <button type="submit">Submit</button>
      </form>
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </div>
  );
};

export default LoginForm;