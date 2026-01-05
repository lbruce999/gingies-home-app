import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: "Submit",
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Learn More',
    variant: 'secondary',
  },
};

export const Ghost: Story = {
  args: {
    label: 'Cancel',
    variant: 'ghost',
  },
};

export const Danger: Story = {
  args: {
    label: 'Delete Request',
    variant: 'danger',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled',
    disabled: true,
  },
};