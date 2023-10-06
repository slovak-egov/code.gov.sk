import React, { HTMLAttributes } from 'react';

interface IGridColumnProps extends HTMLAttributes<HTMLDivElement> {
  widthUnits: number;
  totalUnits: number;
}

const GridColumn: React.FC<IGridColumnProps> = ({ widthUnits, totalUnits, className, children, ...props }) => {
  let autoClassName = 'govuk-grid-column-';

  // const { widthUnits, totalUnits, className, ...attributes } = props;

  if (totalUnits <= 1 || widthUnits >= totalUnits) {
    autoClassName += 'full';
  } else if (widthUnits < totalUnits) {
    switch (widthUnits) {
      case 1:
        autoClassName += 'one-';
        break;
      case 2:
        autoClassName += 'two-';
        break;
      case 3:
        autoClassName += 'three-';
        break;
    }

    switch (totalUnits) {
      case 2:
        autoClassName += 'half';
        break;
      case 3:
        autoClassName += 'third';
        break;
      case 4:
        autoClassName += 'quarter';
        break;
    }

    if (widthUnits > 1) {
      autoClassName += 's';
    }
  }

  autoClassName += ' ';

  return (
    <div className={autoClassName + (className ? className : '')} {...props}>
      {children}
    </div>
  );
};

export default GridColumn;
