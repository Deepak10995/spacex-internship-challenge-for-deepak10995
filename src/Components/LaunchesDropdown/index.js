import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
// import NativeSelect from '@material-ui/core/NativeSelect';
import { makeStyles } from '@material-ui/core/styles';
import { default as React, Fragment, useState } from 'react';
import filterIcon from '../../assets/icons/filter/Vector.svg';
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
  },
}));
const Index = (props) => {
  const [list] = useState([
    'All Launches',
    'Upcoming Launches',
    'Successful Launches',
    'Failed Launches',
  ]);
  const [dropValue, setDropValue] = useState('All Launches');
  const classes = useStyles();

  const handleChange = (e) => {
    setDropValue(e.target.value);
  };

  return (
    <Fragment>
      <img src={filterIcon} alt='filter launches' />
      <FormControl className={classes.formControl}>
        <Select
          native
          value={dropValue}
          onChange={(e) => handleChange(e)}
          className='w-75'
          disableUnderline
          inputProps={{
            id: 'dropValue-native',
          }}>
          {list &&
            list.length > 0 &&
            list.map((item, index) => (
              <option value={item} key={index}>
                {item}
              </option>
            ))}
        </Select>
      </FormControl>
    </Fragment>
  );
};

export default Index;
