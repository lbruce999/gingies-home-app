import { useState } from 'react';
import { AppLayout } from './components/AppLayout/AppLayout';
import { Header } from './components/Header/Header';
import { Card } from './components/Card/Card';
import { LoginForm } from './features/auth/LoginForm';
import { SignupForm } from './features/auth/SignupForm';

export function App() {
  const [mode, setMode] = useState<'login' | 'signup'>('login');

  const isLogin = mode === 'login';

  const title = isLogin ? 'Log in' : 'Sign up';
  const description = isLogin
    ? 'Welcome back! Enter your details to continue.'
    : 'Create your account to get started.';

  return (
    <AppLayout header={<Header />}>
      <div className="flex justify-center px-4 py-10">
        <Card
          logo={
            <img
              src="src/assets/react.svg"
              alt="Gingie"
              className="h-8 w-8"
            />
          }
          appName="Gingie"
          title={title}
          description={description}
        >
          {isLogin ? (
            <LoginForm onSwitchToSignup={() => setMode('signup')} />
          ) : (
            <SignupForm onSwitchToLogin={() => setMode('login')} />
          )}
        </Card>
      </div>
    </AppLayout>
  );
}