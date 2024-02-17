import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';

export function BasicTable(props: { data: any[] }) {
  const { data } = props;
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 300 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {
                Object.keys(data[0] ?? []).map((key) => (<TableCell key={key}>
                  <Typography fontWeight={900}>
                    {key}
                  </Typography>
                </TableCell>))
              }
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((row, index) => (
              <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                {
                  Object.values(row).map((value: any, index) => (
                    <TableCell align="left" key={index}>
                      <Typography>
                        {value}
                      </Typography>
                    </TableCell>
                  ))
                }
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}