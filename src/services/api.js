import axios from 'axios';

export default axios.create({
  baseURL: `https://protected-river-26160.herokuapp.com/api/`
});