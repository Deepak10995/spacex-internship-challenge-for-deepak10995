import axios from 'axios';
import { useDispatch } from 'react-redux';
import toasterStatusAction from '../Actions/toasterStatusAction';
const { REACT_APP_API_BASE_URL } = process.env;
console.log('app base url ===>>>>', process.env.REACT_APP_API_BASE_URL);
const agent = async (url) => {
  let data = await axios
    .get(REACT_APP_API_BASE_URL + url)
    .then((res) => res.data)
    .catch((err) => {
      console.log(err);
      useDispatch(
        toasterStatusAction({
          open: true,
          message: err.message,
          severity: 'error',
        })
      );
    });

  return data;
};
export { agent };
