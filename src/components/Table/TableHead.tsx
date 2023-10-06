import { HTMLAttributes } from 'react';

type TableHeadProps = HTMLAttributes<HTMLTableSectionElement>;

const TableHead = (props: TableHeadProps) => <thead className="idsk-table__head">{props.children}</thead>;

export default TableHead;
