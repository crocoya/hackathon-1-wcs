import axios from 'axios';

const instance = axios.create({
  baseURL:
    'https://console.firebase.google.com/project/hackathon-1-wcs-763ca/database/hackathon-1-wcs-763ca-default-rtdb/data',
});

export default instance;
