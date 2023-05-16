import axios from "axios";
export const api_host = process.env.apiHost;

async function myFunction() {
  const configData = await getConfigUrl();
  if (configData) {
    return configData
  } else {
    return { apiHost: process.env.apiHost }
  }
}

const axiosInstance = axios.create({
  baseURL: '',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

async function setBaseURL() {
  const baseURL = await myFunction();
  axiosInstance.defaults.baseURL = baseURL;
}

setBaseURL();
export { axiosInstance };
