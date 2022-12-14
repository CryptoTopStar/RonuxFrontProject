import * as React from "react";
import {
  TableBody,
  TableCell,
  TableRow,
  Box,
  Stack,
  Avatar,
  Button
} from "@mui/material";
import { MuiChip } from "../../commonStyle/CommonStyle";
import { useNavigate } from "react-router-dom";
import EditUserModal from "./EditUserModal";
import DeleteUserModal from "./DeleteUserModal";


export type reviewReportDataType = {
  username: string,
  telephone: string,
  email: string,
  point: number,
}

export default function UsersTableBody(props: any) {
  let navigate = useNavigate();
  const rows: Array<reviewReportDataType> = props.rows;
  return (
    <TableBody>
      {rows.map((row, index) => (
        <TableRow key={index} hover={true} className="row-hover">
          <TableCell style={{ width: '22%' }} component="th" scope="row">
            <Stack direction="row" spacing={0}>
              <Avatar />
              <Button
                className="name-detail normal-text"
                variant="text"
              >
                {row.username}
              </Button>
            </Stack>
          </TableCell>
          <TableCell style={{ width: '22%' }}>{row.email}</TableCell>
          <TableCell style={{ width: '23%' }}>{row.telephone}</TableCell>
          <TableCell style={{ width: '23%' }}>{row.point}</TableCell>

          <TableCell align="right">
            <Box className="hidden">
              <EditUserModal getUserlist={props.getUserlist} row={row} />
            </Box>
          </TableCell>
          <TableCell align="right">
            <Box className="hidden">
              <DeleteUserModal row={row} getUserlist={props.getUserlist} />
            </Box>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
}
