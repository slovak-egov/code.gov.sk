import { PropsWithChildren } from 'react';

interface IProps extends PropsWithChildren {}

const GridRow = (props: IProps) => <div className="govuk-grid-row">{props.children}</div>;

export default GridRow;
