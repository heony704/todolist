import React from 'react';
import Logo from 'src/components/Logo';
import Form from 'src/components/Form';
import useFormState from 'src/hooks/useFormState';
import { useLogin } from 'src/hooks/useAuth';

export default function LoginPage() {
  const [loginForm, handleInputChange] = useFormState({
    email: '',
    password: '',
  });

  const login = useLogin();

  const handleSubmit = () => {
    login(loginForm.email, loginForm.password);
  };

  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 space-y-6 mx-auto md:h-screen lg:py-0">
      <Logo />
      <Form title="Login to your account" onSubmit={handleSubmit}>
        <Form.Input
          name="email"
          type="email"
          label="Your email"
          placeholder="name@company.com"
          value={loginForm.email}
          onChange={handleInputChange}
        />
        <Form.Input
          name="password"
          type="password"
          label="Password"
          placeholder="••••••••"
          value={loginForm.password}
          onChange={handleInputChange}
        />
        <Form.Button text="Sign in" />
        <Form.Helper
          helpText="Don’t have an account yet?"
          navigateText="Sign up"
          navigatePath="/register"
        />
      </Form>
    </div>
  );
}
