import axios from 'axios';


export const apiGetUsers = () => {

  const url =`https://yalantis-react-school-api.yalantis.com/api/task0/users`
  return axios.get(url);
}


