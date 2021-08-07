import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Moment from 'moment';
import React from 'react';

// const useStyles = makeStyles({
//   root: {
//     width: '95%',
//   },
//   container: {
//     maxHeight: 400,
//   },
// });
const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const BootstrapFailedButton = withStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 12,
    padding: '6px 12px',
    lineHeight: 1,
    backgroundColor: '#FDE2E1',
    borderColor: '#FDE2E1',
    borderRadius: '20px',
    color: '#B14D4D',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: '#B14D4D',
      color: '#FDE2E1',
      borderColor: '#FDE2E1',
      boxShadow: 'none',
    },
  },
})(Button);

const BootstrapUpcomingButton = withStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 12,
    padding: '6px 12px',
    lineHeight: 1,
    backgroundColor: '#FEF3C7',
    borderColor: '#FEF3C7',
    borderRadius: '20px',
    color: '#92400F',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: '#92400F',
      color: '#FEF3C7',
      borderColor: '#FEF3C7',
      boxShadow: 'none',
    },
  },
})(Button);
const BootstrapSuccessButton = withStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 12,
    padding: '6px 12px',
    lineHeight: 1,
    backgroundColor: '#DEF7EC',
    borderColor: '#DEF7EC',
    borderRadius: '20px',
    color: '#03543F',
    fontFamily: ['-apple-system'].join(','),
    '&:hover': {
      backgroundColor: '#03543F',
      color: '#DEF7EC',
      borderColor: '#03543F',
      boxShadow: 'none',
    },
  },
})(Button);

const List = (props) => {
  const { element, handleFormClick } = props;

  const handleClickLaunch = () => {
    handleFormClick(element);
  };
  return (
    <TableRow
      hover
      tabIndex={-1}
      key={element}
      style={{ curser: 'pointer' }}
      onClick={handleClickLaunch}>
      <TableCell>
        {element.flight_number < 10
          ? `0${element.flight_number}`
          : element.flight_number}
      </TableCell>
      <TableCell>
        {`${Moment(element.launch_date_utc).date()} ${
          monthNames[Moment(element.launch_date_utc).month()]
        } ${Moment(element.launch_date_utc).year()} at ${Moment(
          element.launch_date_utc
        ).format('HH:mm')}`}
      </TableCell>
      <TableCell>{element.launch_site.site_name}</TableCell>
      <TableCell>{element.mission_name}</TableCell>
      <TableCell>
        {
          element.rocket.second_stage.payloads[
            element.rocket.second_stage.payloads.length - 1
          ].orbit
        }
      </TableCell>
      <TableCell style={{ textAlign: 'center' }}>
        {element.upcoming && (
          <BootstrapUpcomingButton>Upcoming</BootstrapUpcomingButton>
        )}
        {element.launch_success && (
          <BootstrapSuccessButton>Success</BootstrapSuccessButton>
        )}
        {!element.launch_success && element.launch_success !== null && (
          <BootstrapFailedButton>Failed</BootstrapFailedButton>
        )}
      </TableCell>
      <TableCell>{element.rocket.rocket_name}</TableCell>
    </TableRow>
  );
};

export default List;
