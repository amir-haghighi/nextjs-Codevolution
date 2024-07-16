import React from 'react';

async function Login() {
  await new Promise((resolve) => setTimeout(resolve, 4000));
  return <h1>Login</h1>;
}

export default Login;
