// components/ui/Table.tsx
import React from 'react';
import {
  Table as MUITable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow as MUITableRow, // Rename TableRow to avoid conflicts
  Paper,
  TableProps as MUITableProps,
  LinearProgress,
  Skeleton,
  TableRow,
} from '@mui/material';

export interface TableColumn {
  label: string;
  index: string;
  render?: (value: any) => React.ReactNode;
}

interface TableProps extends MUITableProps {
  data: Record<string, any>[];
  loading?: boolean;
  columns: TableColumn[];
  cellStyles?: React.CSSProperties; // New prop for custom cell styles
  onRowClick?: (rowData: Record<string, any>) => void; // New prop for row click handler
  TableRowProps?: React.HTMLAttributes<HTMLTableRowElement>; // Allow users to pass TableRowProps
}

const Table: React.FC<TableProps> = ({ data, loading = false, columns, cellStyles, onRowClick, TableRowProps, ...props }) => {
  if (loading) {
    return (
      <>
        <LinearProgress />
        <TableContainer component={Paper}>
          <MUITable {...props}>
            <TableHead>
              <MUITableRow>
                {columns.map((column, index ) => (
                  <TableCell key={column?.index|| index}>
                    <Skeleton animation="wave" />
                  </TableCell>
                ))}
              </MUITableRow>
            </TableHead>
            <TableBody>
              {Array.from({ length: 5 }).map((_, rowIndex) => (
                <MUITableRow key={rowIndex}  {...TableRowProps}>
                  {columns.map((column, columnIndex) => (
                    <TableCell key={columnIndex}>
                      <Skeleton animation="wave" />
                    </TableCell>
                  ))}
                </MUITableRow>
              ))}
            </TableBody>
          </MUITable>
        </TableContainer>
      </>
    );
  }

  if (!data.length) {
    return <div>No data available</div>;
  }

  return (
    <TableContainer component={Paper}>
      <MUITable {...props}>
        <TableHead>
          <MUITableRow>
            {columns.map((column, index) => (
              <TableCell key={index}>{column.label}</TableCell>
            ))}
          </MUITableRow>
        </TableHead>
        <TableBody>
          {data.map((row, rowIndex) => (
            <MUITableRow
              key={rowIndex}
              hover  // Enable row hover effect
              onClick={() => onRowClick && onRowClick(row)}  // Handle row click
              style={{ cursor: onRowClick ? 'pointer' : 'default' }} // Change cursor style for clickable rows
              {...TableRowProps} // Allow users to pass additional props to TableRow
            >
              {columns.map((column, columnIndex) => (
                <TableCell
                  key={columnIndex}
                  style={cellStyles} // Apply custom cell styles
                >
                  {column.render ? column.render(row[column.index]) : row[column.index]}
                </TableCell>
              ))}
            </MUITableRow>
          ))}
        </TableBody>
      </MUITable>
    </TableContainer>
  );
};

export default Table;
