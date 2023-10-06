import { HTMLAttributes } from 'react';

type TableRowProps = HTMLAttributes<HTMLTableRowElement>;

const TableRow = (props: TableRowProps) => <tr className="idsk-table__row">{props.children}</tr>;

export default TableRow;
