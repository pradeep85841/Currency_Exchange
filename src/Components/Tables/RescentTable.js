import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function RescentList() {
  const content = useSelector((state) => state.TABLE);
  const dispatch = useDispatch();

  function getData() {
    return (dispatch) => {
      fetch(`https://currencyexchange-bec7.onrender.com/rescentRequest`)
        .then((res) => res.json())
        .then((json) => {
          let result = JSON.parse(JSON.stringify(json));
          dispatch({
            type: "TABLE_DATA",
            data: result,
          });
        });
    };
  }

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  return (
    <div>
      {content.data && (
        <Box sx={{ width: "85%" }} style={{ margin: "auto" }}>
          <Typography variant="h6" component="div" sx={{ mb: 2 }}>
            <h2>Rescent Conertions</h2>
          </Typography>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Date</StyledTableCell>
                  <StyledTableCell align="right">From</StyledTableCell>
                  <StyledTableCell align="right">To</StyledTableCell>
                  <StyledTableCell align="right">
                    Min_Exchange_Rate
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    Max_Exchange_Rate
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {content.data.map((row) => (
                  <StyledTableRow key={row.timeStamp}>
                    <StyledTableCell component="th" scope="row">
                      {row.timeStamp}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.from}</StyledTableCell>
                    <StyledTableCell align="right">{row.to}</StyledTableCell>
                    <StyledTableCell align="right">
                      {row.min_rate}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.max_rate}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      )}
    </div>
  );
}
