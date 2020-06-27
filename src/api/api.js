import *as axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000/'
});


export const booksAPI = {
  getBooks: () => {
    return instance.get(`books`).then(response => {
      return response.data;
    });
  }
}

