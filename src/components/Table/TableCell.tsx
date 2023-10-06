import { HTMLAttributes } from 'react';

type TableCellProps = HTMLAttributes<HTMLTableCellElement>;

const TableCell = (props: TableCellProps) => (
  <td className="idsk-table__cell" {...props}>
    {props.children}
  </td>
);

export default TableCell;
