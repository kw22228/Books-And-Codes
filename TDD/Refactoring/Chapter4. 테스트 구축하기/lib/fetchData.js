import { axiosInstance } from './axios';

export default async function fetchData(callback) {
  const { data } = await axiosInstance.get('/Json/data.json');

  if (typeof callback !== 'undefined') {
    callback(data);
    return;
  }

  return data;
}

// async function init() {
//   console.log(await fetchData());
// }

// init();
