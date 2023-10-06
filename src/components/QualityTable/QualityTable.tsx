import React, { useState } from 'react';

import TableRow from '../Table/TableRow';
import TableHead from '../Table/TableHead';
import Table from '../Table/Table';
import TableHeaderCell from '../Table/TableHeaderCell';
import TableCell from '../Table/TableCell';

interface IQualityTableProps {
  headerTitle: string;
  headerCells: string[];
  rows: { name: string; values: number[] }[];
}

const QualityTable: React.FC<IQualityTableProps> = ({ headerTitle, headerCells, rows }) => {
  const [orderBy, setOrderBy] = useState<number | null>(null);
  const [orderByDirection, setOrderByDirection] = useState<'asc' | 'desc'>('asc');

  const ordered = [...rows];
  const orderConstant = orderByDirection === 'asc' ? 1 : -1;
  if (orderBy !== null) {
    switch (orderBy) {
      case -1:
        ordered.sort((a, b) => a.name.localeCompare(b.name) * orderConstant);
        break;
      default:
        ordered.sort((a, b) => (a.values[orderBy] - b.values[orderBy]) * orderConstant);
        break;
    }
  }

  return (
    <>
      <h2 className="govuk-heading-m" style={{ color: 'rgb(43, 140, 196)', margin: '30px 0px 20px' }}>
        {headerTitle}
      </h2>
      <Table>
        <TableHead>
          <TableRow>
            {headerCells.map((cell, idx) => (
              <TableHeaderCell
                key={idx}
                enableSorting={true}
                sortingDirection={orderBy === idx - 1 ? orderByDirection : null}
                toggleSortingDirection={() => {
                  if (orderBy === idx - 1) {
                    if (orderByDirection === 'desc') {
                      setOrderBy(null);
                      setOrderByDirection('asc');
                    } else {
                      setOrderByDirection('desc');
                    }
                  } else {
                    setOrderBy(idx - 1);
                    setOrderByDirection('asc');
                  }
                }}
              >
                {cell}
              </TableHeaderCell>
            ))}
          </TableRow>
        </TableHead>
        <tbody className="idsk-table__body">
          {ordered.map((item, idx) => {
            return (
              <TableRow key={idx}>
                <TableCell>{item.name}</TableCell>
                {item.values.map((item2, idx2) => (
                  <TableCell key={idx2}>{item2}</TableCell>
                ))}
              </TableRow>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default QualityTable;
