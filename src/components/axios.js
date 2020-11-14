import axios from 'axios';

const instance = axios.create({
    baseURL:"https://us-central1-eclone-f3f83.cloudfunctions.net/api"
    // baseURL:"http://localhost:5001/eclone-f3f83/us-central1/api"
});

export default instance