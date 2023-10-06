import { HTMLAttributes } from 'react';

type TableHeaderCellProps = {
  enableSorting: boolean;
  sortingDirection: 'asc' | 'desc' | null;
  toggleSortingDirection?: () => void;
} & HTMLAttributes<HTMLTableCellElement>;

const TableHeaderCell = ({
  enableSorting,
  sortingDirection,
  toggleSortingDirection,
  children
}: TableHeaderCellProps) => {
  let directionClass = '';
  if (sortingDirection === 'asc') directionClass = 'aes';
  if (sortingDirection === 'desc') directionClass = 'des';

  return (
    <th className="idsk-table__header">
      <span className="th-span">
        <>
          {children}
          {enableSorting ? (
            <>
              <button className={'arrowBtn ' + directionClass} onClick={toggleSortingDirection}>
                <span className="sr-only">Nezoradený stĺpec - použije vzostupné zoradenie.</span>
              </button>
            </>
          ) : null}
        </>
      </span>
    </th>
  );
};

export default TableHeaderCell;
