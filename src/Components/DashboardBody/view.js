import { Divider } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import Moment from 'moment';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { FaWikipediaW } from 'react-icons/fa';
import { FiYoutube } from 'react-icons/fi';
import nasa from '../../assets/images/nasa/nasa.svg';

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

const styles = (theme) => ({
  root: {
    marginBottom: '-50px',
    padding: theme.spacing(4),
    fontFamily: ['Times New Roman'],
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[700],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { item, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Row md={6}>
        <Col md={2.7}>
          <img
            src={item.links.mission_patch}
            height='80px'
            width='80px'
            alt='logo'
          />
        </Col>
        <Col md='2'>
          <Row md={12}>
            <h5>{item.mission_name}</h5>
          </Row>
          <Row md={12}>
            <p>{item.rocket.rocket_name}</p>
          </Row>
          <Row md={12}>
            <Col md={4}>
              <img src={nasa} height='17px' width='17px' alt='logo' />
            </Col>
            <Col md={4}>
              <FaWikipediaW />
            </Col>
            <Col md={4}>
              <FiYoutube />
            </Col>
          </Row>
        </Col>
        <Col>
          <div style={{ paddingLeft: '2px' }}>
            {item.upcoming && (
              <BootstrapUpcomingButton>Upcoming</BootstrapUpcomingButton>
            )}
            {item.launch_success && (
              <BootstrapSuccessButton>Success</BootstrapSuccessButton>
            )}
            {!item.launch_success && item.launch_success !== null && (
              <BootstrapFailedButton>Failed</BootstrapFailedButton>
            )}
          </div>
        </Col>
      </Row>
      {onClose ? (
        <IconButton
          aria-label='close'
          className={classes.closeButton}
          onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
      <Row>
        <div style={{ padding: '10px 10px' }}>
          <p>
            {item.details}
            <a
              href={item.links.wikipedia}
              style={{
                textDecoration: 'none',
              }}>
              {' Wikipedia'}
            </a>
          </p>
        </div>
      </Row>
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

export default function ViewKey(props) {
  const handleClose = () => {
    props.handleClose();
  };
  const { open, keyItem } = props;
  console.log('this is the key item', keyItem);

  return (
    <div>
      <Dialog
        onClose={handleClose}
        aria-labelledby='customized-dialog-title'
        open={open}
        fullWidth={true}
        maxWidth={'sm'}>
        <DialogTitle
          id='customized-dialog-title'
          item={keyItem}
          onClose={handleClose}
        />
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12} className='m-auto'>
              <List>
                <ListItem>
                  <ListItemText className='w-25' primary='Flight Number' />
                  <ListItemText
                    className='w-25'
                    primary={
                      keyItem.flight_number < 10
                        ? `0${keyItem.flight_number}`
                        : keyItem.flight_number
                    }
                  />
                </ListItem>
                <Divider
                  style={{ background: 'darkGrey' }}
                  flexItem
                  variant='middle'
                />
                <ListItem>
                  <ListItemText className='w-25' primary='Mission Name' />
                  <ListItemText
                    className='w-25'
                    primary={keyItem.mission_name}
                  />
                </ListItem>
                <Divider
                  style={{ background: 'darkGrey' }}
                  flexItem
                  variant='middle'
                />
                <ListItem>
                  <ListItemText className='w-25' primary='Rocket Type' />
                  <ListItemText
                    className='w-25'
                    primary={keyItem.rocket.rocket_type}
                  />
                </ListItem>
                <Divider
                  style={{ background: 'darkGrey' }}
                  flexItem
                  variant='middle'
                />
                <ListItem>
                  <ListItemText className='w-25' primary='Rocket Name' />
                  <ListItemText
                    className='w-25'
                    primary={keyItem.rocket.rocket_name}
                  />
                </ListItem>
                <Divider
                  style={{ background: 'darkGrey' }}
                  flexItem
                  variant='middle'
                />
                <ListItem>
                  <ListItemText className='w-25' primary='Manufacturer' />
                  <ListItemText className='w-25' primary='SpaceX' />
                </ListItem>
                <Divider
                  style={{ background: 'darkGrey' }}
                  flexItem
                  variant='middle'
                />
                <ListItem>
                  <ListItemText className='w-25' primary='Nationallity' />
                  <ListItemText className='w-25' primary='SpaceX' />
                </ListItem>
                <Divider
                  style={{ background: 'darkGrey' }}
                  flexItem
                  variant='middle'
                />
                <ListItem>
                  <ListItemText className='w-25' primary='Launch Date' />
                  <ListItemText
                    className='w-25'
                    primary={`${Moment(keyItem.launch_date_utc).date()} ${
                      monthNames[Moment(keyItem.launch_date_utc).month()]
                    } ${Moment(keyItem.launch_date_utc).year()} at ${Moment(
                      keyItem.launch_date_utc
                    ).format('HH:mm')}`}
                  />
                </ListItem>
                <Divider
                  style={{ background: 'darkGrey' }}
                  flexItem
                  variant='middle'
                />
                <ListItem>
                  <ListItemText className='w-25' primary='Payload Type' />
                  <ListItemText
                    className='w-25'
                    primary={
                      keyItem.rocket.second_stage.payloads[
                        keyItem.rocket.second_stage.payloads.length - 1
                      ].payload_type
                    }
                  />
                </ListItem>
                <Divider
                  style={{ background: 'darkGrey' }}
                  flexItem
                  variant='middle'
                />
                <ListItem>
                  <ListItemText className='w-25' primary='Orbit' />
                  <ListItemText
                    className='w-25'
                    primary={
                      keyItem.rocket.second_stage.payloads[
                        keyItem.rocket.second_stage.payloads.length - 1
                      ].orbit
                    }
                  />
                </ListItem>
                <Divider
                  style={{ background: 'darkGrey' }}
                  flexItem
                  variant='middle'
                />
                <ListItem>
                  <ListItemText className='w-25' primary='Launch Site' />
                  <ListItemText
                    className='w-25'
                    primary={keyItem.launch_site.site_name}
                  />
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </div>
  );
}
