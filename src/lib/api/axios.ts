import Axios from 'axios';

export const axios = Axios.create({
  baseURL: 'https://data.gov.sk'
});
