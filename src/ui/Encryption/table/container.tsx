import React from "react";
import {
  withStyles,
  Theme,
  createStyles,
  TableCell,
  TableRow,
  TableHead,
  Table,
  TableBody,
  TableContainer,
  Button,
} from "@material-ui/core";
import { downloadEncryption } from "../../../main/api";
import { GetApp } from "@material-ui/icons";
import { Encryption } from "../Encryption.presenter";

export interface EncryptionFormValues {
  fullName: string;
  email: string;
}

export interface EncryptionTableProps {
  encryptions: Encryption[];
}

const EncryptionTable: React.FC<EncryptionTableProps> = ({ encryptions }) => {
  const StyledTableCell = withStyles((theme: Theme) =>
    createStyles({
      head: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
      },
      body: {
        fontSize: 14,
      },
    }),
  )(TableCell);

  const StyledTableRow = withStyles((theme: Theme) =>
    createStyles({
      root: {
        "&:hover": {
          backgroundColor: theme.palette.background.default,
        },
      },
    }),
  )(TableRow);

  function createData(
    id: string,
    name: string,
    email: string,
    file1: string,
    file2: string,
  ) {
    return { id, name, email, file1, file2 };
  }

  return (
    <TableContainer>
      <Table className="table" aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell>Email</StyledTableCell>
            <StyledTableCell>File Name 1</StyledTableCell>
            <StyledTableCell>File Name 2</StyledTableCell>
            <StyledTableCell></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {encryptions.map(encryption => (
            <StyledTableRow key={encryption.name}>
              <StyledTableCell>{encryption.name}</StyledTableCell>
              <StyledTableCell>{encryption.email}</StyledTableCell>
              <StyledTableCell>{encryption.file1}</StyledTableCell>
              <StyledTableCell>{encryption.file2}</StyledTableCell>
              <StyledTableCell>
                <Button
                  color="primary"
                  startIcon={<GetApp />}
                  onClick={() => downloadEncryption(encryption.id)}>
                  Download
                </Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EncryptionTable;
