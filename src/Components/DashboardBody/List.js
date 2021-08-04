import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import React from 'react';
import { useSelector } from 'react-redux';

const columns = [
  { id: 'number', label: 'No:', minWidth: 10, align: 'left' },
  { id: 'launchedDate', label: 'Launched (UTC)', minWidth: 30, align: 'left' },
  {
    id: 'location',
    label: 'Location',
    minWidth: 40,
    align: 'left',
  },
  {
    id: 'mission',
    label: 'Mission',
    minWidth: 50,
    align: 'left',
    // format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'orbit',
    label: 'Orbit',
    minWidth: 50,
    align: 'left',
    // format: (value) => value.toFixed(2),
  },
  {
    id: 'launchStatus',
    label: 'Launch Status',
    minWidth: 50,
    align: 'left',
    // format: (value) => value.toFixed(2),
  },
  {
    id: 'rocket',
    label: 'Rocket',
    minWidth: 50,
    align: 'left',
    // format: (value) => value.toFixed(2),
  },
];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

const List = () => {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const { isData, homePageData } = useSelector((state) => ({
    isData: state.isData,
    homePageData: state.homePageData,
  }));
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  // useEffect(()=> {

  // })

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label='sticky table'>
          <TableHead>
            <TableRow>
              {columns.map((column, index) => (
                <TableCell
                  key={index}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {isData &&
              homePageData &&
              homePageData.length > 0 &&
              homePageData
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  return (
                    <TableRow hover role='checkbox' tabIndex={-1} key={index}>
                      {columns.map((column, index) => {
                        // const value = row[column.id];
                        return (
                          <TableCell key={index} align={column.align}>
                            Number
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component='div'
        count={homePageData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default List;
