import type { Meta, StoryObj } from '@storybook/react-vite';
import { AppLayout } from './AppLayout';
import { Button } from '../Button/Button';

const meta: Meta<typeof AppLayout> = {
  title: 'Layout/AppLayout',
  component: AppLayout,
};

export default meta;

type Story = StoryObj<typeof meta>;

const HeaderMock = () => (
    <div style={{ padding: '1rem', display: 'flex', justifyContent: 'space-between' }}>
      <strong>Gingie’s Home Solutions</strong>
      <Button label="Request a Quote" size="small" />
    </div>
);

export const Default: Story = {
  args: {
    header: <HeaderMock />,
    children: (
        <>
          <h2>Welcome back 👋</h2>
          <p>This is your app layout container.</p>
        </>
    ),
  },
};
