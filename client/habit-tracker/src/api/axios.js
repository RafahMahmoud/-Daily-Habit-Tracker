import axios from 'axios';

const instance = axios.create({
  //axios.create() is a method provided by axios to create a new instance with custom configuration.
  baseURL: 'http://localhost:5000/api/habits',
  //In this configuration, the baseURL option is set to 'http://localhost:5000/api/habits'. This means that all requests made using this instance will automatically have this base URL prefixed to their paths.
});

export default instance;
