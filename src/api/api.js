import *as axios from 'axios';

/* axios instance example
const instance = axios.create({
  withCredentials: true,
  headers: {
    "API-KEY": "debbd9e5-51f4-44e1-b1d8-ad026688cc54"* - exampe of adding API_KEY for REST API REQUESTS/
  },
  baseURL: 'https://social-network.samuraijs.com/api/1.0/' - baseUrl example
});
*/

export const booksAPI = {
  setBooks: () => {
    return axios.get(`/books.json`)
      .then(response => {
        return response.data;
      });
  }
}