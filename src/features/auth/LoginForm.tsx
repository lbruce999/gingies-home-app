import { FormEvent, useState } from 'react';

type LoginFormProps = {
  defaultEmail?: string;
  defaultPassword?: string;
  submitLabel?: string;
  onSubmit?: (values: { email: string; password: string }) => void;
  onSwitchToSignup?: () => void;
  switchLabel?: string;
};

export function LoginForm({
  defaultEmail = '',
  defaultPassword = '',
  submitLabel = 'Log in',
  switchLabel = 'Create an account',
  onSubmit,
  onSwitchToSignup,
}: LoginFormProps) {
  const [email, setEmail] = useState(defaultEmail);
  const [password, setPassword] = useState(defaultPassword);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmit?.({ email, password });
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="space-y-2">
        <label className="text-sm font-medium text-slate-800" htmlFor="login-email">
          Email: 
        </label>
        <input
          id="login-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="w-full rounded-xl border border-slate-800 px-3 py-2 text-sm text-slate-900 shadow-sm transition focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-500"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-slate-800" htmlFor="login-password">
          Password
        </label>
        <input
          id="login-password"
          name="password"
          type="password"
          autoComplete="current-password"
          required
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-900 shadow-sm transition focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-100"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-300"
      >
        {submitLabel}
      </button>

      {onSwitchToSignup && (
        <button
          type="button"
          onClick={onSwitchToSignup}
          className="w-full text-center text-sm font-semibold text-slate-700 underline underline-offset-4 transition hover:text-slate-900"
        >
          {switchLabel}
        </button>
      )}
    </form>
  );
}
