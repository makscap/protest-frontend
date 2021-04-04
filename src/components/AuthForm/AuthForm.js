// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { authOperations } from '../redux/auth';

import styles from './AuthForm.module.css';

const AuthForm = props => {
  const { email, password, handleLogin, handleRegister, handleChange } = props;

  return (
    <div className={styles.Form_container}>
      <form className={styles.form}>
        <p className={styles.header}>
          You can use your Google Account to authorize:
        </p>
        <label>
          <button className={styles.button__google}>Google</button>
        </label>

        <p className={styles.header}>
          Or login to our app using e-mail and password:
        </p>

        <label>
          <input
            type="text"
            name="email"
            required
            autoFocus
            value={email}
            autoComplete="off"
            placeholder="E-mail"
            onChange={handleChange}
            className={styles.input_item}
          />
        </label>

        <label>
          <input
            type="password"
            name="password"
            value={password}
            required
            autoFocus
            autoComplete="off"
            placeholder="Password"
            onChange={handleChange}
            className={styles.input_item}
          />
        </label>

        <div className={styles.button_container}>
          <button onClick={handleLogin} className={styles.button_reg}>
            Sign in
          </button>
          <button onClick={handleRegister} className={styles.button_auth}>
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuthForm;