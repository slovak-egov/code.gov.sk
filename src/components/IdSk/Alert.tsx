import React, { JSX } from 'react';

interface IAlertProps {
  type: 'info' | 'warning';
  children: JSX.Element;
}

const Alert = ({ type, children, ...props }: IAlertProps) => {
  return (
    <div className={'idsk-warning-text ' + (type === 'info' && 'idsk-warning-text--info')} {...props}>
      <div className="govuk-width-container">
        <div className="idsk-warning-text__text">{children}</div>
      </div>
    </div>
  );
};

export default Alert;
