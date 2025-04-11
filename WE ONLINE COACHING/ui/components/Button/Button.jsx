import './button.css';

const Button = ({ children, onClick, variant = 'primary', disabled = false, size = 'medium', className = '' }) => {
  const baseClass = 'button';
  const variantClass = `button--${variant}`;
  const sizeClass = size !== 'medium' ? `button--${size}` : '';
  
  const combinedClassName = [
    baseClass,
    variantClass,
    sizeClass,
    className
  ].filter(Boolean).join(' ');

  return (
    <button
      className={combinedClassName}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button; 