import axios from 'axios';

export default axios.create({
  // baseURL: `https://protected-river-26160.herokuapp.com/api/`
  // baseURL:`https://minishop-node-server.herokuapp.com/`
  baseURL: process.env.NODE_ENV == "development"?`http://localhost:5000/`:`https://minishop-node-server.herokuapp.com/`
});