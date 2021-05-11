import axios from 'axios';

const instance = axios.create({
  baseURL:
    'https://hackathon-1-wcs-763ca-default-rtdb.europe-west1.firebasedatabase.app/',
});

export default instance;
