import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { CommonTableProps, TableColumns, TableRows } from '@/types';

/**
 * Common Table Component
 * @param columns - Parameters that display table column information
 * @param rows - Parameters for drawing row data in a table
 * @param tableCellProps - TableCell Component Props
 * @constructor
 */
export default function CommonTable<T extends object>({ columns, rows }: CommonTableProps<T>) {
  return (
    <div className="table-container-wrapper">
      <TableContainer component={Paper} className="calendar-holiday-table">
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((column: TableColumns) => (
                <TableCell key={column.label} {...column.tableCellProps}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((tableRows: TableRows<T>) =>
              tableRows.data.map((data: T, index: number) => (
                <TableRow key={JSON.stringify(data)}>
                  {Object.keys(data).map(key => (
                    <TableCell key={key} {...tableRows.tableCellProps?.[index]}>
                      {data[key]}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
