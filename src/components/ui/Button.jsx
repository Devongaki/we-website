// Pure UI component - no business logic
const Button = ({ children, onClick, variant = 'primary', disabled = false, size = 'medium' }) => {
  const baseClass = 'button';
  const variantClass = `button--${variant}`;
  const sizeClass = size !== 'medium' ? `button--${size}` : '';
  
  const className = [
    baseClass,
    variantClass,
    sizeClass
  ].filter(Boolean).join(' ');

  return (
    <button
      className={className}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button; 