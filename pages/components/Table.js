import React, { useMemo } from 'react';
import { useTable, useGlobalFilter, useFilters } from 'react-table';
import ColumnFilter from './ColumnFilter';
import { COLUMNS } from './columns';
import GlobalFilter from './GlobalFilter';
import MOCK_DATA from './MOCK_DATA.json';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

const FilteringTable = props => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);
  const defaultColumn = useMemo(() => {
    return {
      Filter: ColumnFilter
    };
  }, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state: { globalFilter },
    setGlobalFilter
  } = useTable(
    {
      columns,
      data,
      defaultColumn
    },
    useFilters,
    useGlobalFilter
  );

  return (
    <div className="table-container">
      <table {...getTableProps()}>
        <thead> 
          <tr>
            <td colSpan={3}>{<GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />}</td>
          </tr>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);

            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  if (cell.column.Header === 'ACTOR') {
                    return (
                      <Stack className='Stack'>
                        <Avatar
                          className='Avatar'
                          src={cell.value}
                          alt="Avatar"
                        />
                      <td {...cell.getCellProps()}>
                      {cell.render('Cell')}
                      </td>
                      </Stack>
                    );
                  }
                  return (
                    <td {...cell.getCellProps()}>{cell.render('Cell')} </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3}><button>LOAD MORE</button></td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default FilteringTable;
