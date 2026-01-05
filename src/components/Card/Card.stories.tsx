import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card } from './Card';
import { LoginForm } from '../../features/auth/LoginForm';
import { SignupForm } from '../../features/auth/SignupForm';

const meta = {
  title: 'Components/Card',
  component: Card,
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    logo: <div className="text-sm font-bold text-slate-700">G</div>,
    appName: 'Gingie',
    title: 'Welcome back',
    description: 'Use this surface to group related content and actions.',
    children: (
      <p className="text-sm text-slate-700">
        This card demonstrates the shell, header, and content area.
      </p>
    ),
  },
};

export const WithActions: Story = {
  args: {
    logo: <div className="text-sm font-bold text-slate-700">G</div>,
    appName: 'Gingie',
    title: 'Two actions',
    description: 'Show how actions sit on the bottom edge.',
    children: (
      <p className="text-sm text-slate-700">
        Primary and secondary actions are right-aligned in the footer.
      </p>
    ),
    actions: (
      <>
        <button
          type="button"
          className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-200"
        >
          Cancel
        </button>
        <button
          type="button"
          className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-300"
        >
          Confirm
        </button>
      </>
    ),
  },
};

export const LoginCard: Story = {
  args: {
    logo: <div className="text-sm font-bold text-slate-700">G</div>,
    appName: 'Gingie',
    title: 'Log in',
    description: 'Enter your credentials to continue.',
    children: <LoginForm />,
  },
};

export const SignupCard: Story = {
  args: {
    logo: <div className="text-sm font-bold text-slate-700">G</div>,
    appName: 'Gingie',
    title: 'Sign up',
    description: 'Create your account to get started.',
    children: <SignupForm />,
  },
};
