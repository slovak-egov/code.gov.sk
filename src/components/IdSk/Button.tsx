import React, { ButtonHTMLAttributes, useCallback } from 'react';
import { initializeNode } from './IdSkModule';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType: 'primary' | 'secondary' | 'warning';
}

const Button: React.FC<IButtonProps> = ({ buttonType, children, ...props }) => {
  const initialize = useCallback((node: HTMLButtonElement) => {
    initializeNode(node);
  }, []);

  let className = 'idsk-button';

  switch (buttonType) {
    case 'secondary':
      className += ' idsk-button--secondary';
      break;
    case 'warning':
      className += ' idsk-button--warning';
      break;
  }

  return (
    <button ref={initialize} className={className} data-module="idsk-button" {...props}>
      {children}
    </button>
  );
};
export default Button;

Button.defaultProps = {
  buttonType: 'primary'
};
