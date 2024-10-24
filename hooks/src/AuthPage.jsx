import React, { useState } from 'react';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleToggle = () => {
    setIsLogin(!isLogin); 
  };

  return (
    <div style={styles.container}>
      <div style={styles.buttonContainer}>
        <button style={styles.button} onClick={() => setIsLogin(true)}>
          Login
        </button>
        <button style={styles.button} onClick={() => setIsLogin(false)}>
          Signup
        </button>
      </div>

      <div style={styles.formContainer}>
        {isLogin ? <LoginForm /> : <SignupForm />}
      </div>
    </div>
  );
};

const LoginForm = () => (
  <form style={styles.form}>
    <h2>Login</h2>
    <input type="email" placeholder="Email" required style={styles.input} />
    <input type="password" placeholder="Password" required style={styles.input} />
    <button type="submit" style={styles.submitButton}>Login</button>
  </form>
);

const SignupForm = () => (
  <form style={styles.form}>
    <h2>Signup</h2>
    <input type="text" placeholder="Username" required style={styles.input} />
    <input type="email" placeholder="Email" required style={styles.input} />
    <input type="password" placeholder="Password" required style={styles.input} />
    <button type="submit" style={styles.submitButton}>Signup</button>
  </form>
);

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '50px',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    marginBottom: '20px',
  },
  button: {
    padding: '10px 20px',
    cursor: 'pointer',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
  },
  formContainer: {
    width: '300px',
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  submitButton: {
    padding: '10px 20px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default AuthPage;
