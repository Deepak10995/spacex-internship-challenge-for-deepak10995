import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import React, { Fragment, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import LaunchDropDown from '../LaunchesDropdown';
import List from './List';
import View from './view';

const columns = [
  { id: 'number', label: 'No:', minWidth: 5, maxWidth: 10, align: 'left' },
  {
    id: 'launchedDate',
    label: 'Launched (UTC)',
    minWidth: 30,
    maxWidth: 30,
    align: 'left',
  },
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
  },
  {
    id: 'orbit',
    label: 'Orbit',
    minWidth: 50,
    align: 'left',
  },
  {
    id: 'launchStatus',
    label: 'Launch Status',
    minWidth: 50,
    align: 'left',
  },
  {
    id: 'rocket',
    label: 'Rocket',
    minWidth: 50,
    align: 'left',
  },
];

const useStyles = makeStyles({
  root: {
    width: '95%',
    marginBottom: 100,
  },
  container: {
    height: 650,
  },
});
const Index = (props) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  // const history = useHistory()
  const [item, setItem] = useState({});
  const [page, setPage] = React.useState(0);
  const [openDialogView, setOpenDialogView] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(12);
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
  const handleLaunchClick = (data) => {
    setItem(data);
    setOpenDialogView(true);
  };
  const handleCloseView = () => {
    setOpenDialogView(false);
  };

  // Reset Page on Filter
  const handleStatusChange = () => {
    setPage(0);
  };

  // useEffect(() => {
  //   dispatch(loadData());
  // }, [dispatch]);

  return (
    <Fragment>
      <div className='container pt-3'>
        <Row>
          <div className='d-flex justify-content-end overflow-visible'>
            <LaunchDropDown handleStatusChange={handleStatusChange} />
          </div>
        </Row>
        <Row>
          <Col>
            <Paper className={classes.root}>
              <TableContainer className={classes.container}>
                <Table stickyHeader aria-label='sticky table'>
                  <TableHead>
                    <TableRow>
                      {columns.map((column, index) => (
                        <TableCell
                          key={index}
                          align={column.align}
                          style={{
                            minWidth: column.minWidth,
                            maxWidth: column.maxWidth ? column.maxWidth : 40,
                          }}>
                          {column.label}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {isData ? (
                      homePageData && homePageData.length > 0 ? (
                        homePageData
                          .slice(
                            page * rowsPerPage,
                            page * rowsPerPage + rowsPerPage
                          )
                          .map((row, index) => {
                            return (
                              <List
                                element={row}
                                key={index}
                                handleFormClick={handleLaunchClick}
                              />
                            );
                          })
                      ) : (
                        <p>No Result Found For the specified Filter</p>
                      )
                    ) : (
                      <p>Loader</p>
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
              <TablePagination
                rowsPerPageOptions={[12]}
                component='div'
                count={homePageData.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </Paper>
          </Col>
        </Row>
      </div>
      {openDialogView && (
        <View
          open={openDialogView}
          handleClose={handleCloseView}
          keyItem={item}
        />
      )}
    </Fragment>
  );
};

export default Index;
