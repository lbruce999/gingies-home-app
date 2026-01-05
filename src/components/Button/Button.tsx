import './button.css';

export interface ButtonProps {
  label: string;
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  onClick?: () => void;
}

export const Button = ({
                         label,
                         variant = 'primary',
                         size = 'medium',
                         disabled = false,
                         onClick,
                       }: ButtonProps) => {
  const classes = [
    'btn',
    `btn-${variant}`,
    `btn-${size}`,
    disabled ? 'btn-disabled' : '',
  ]
      .filter(Boolean)
      .join(' ');

  return (
      <button
          type="button"
          className={classes}
          disabled={disabled}
          onClick={onClick}
      >
        {label}
      </button>
  );
};
