import *as axios from 'axios';

const instance = axios.create({
  baseURL: 'https://oleg-irchishyn.github.io/E-shop/./'
});


export const booksAPI = {
  getBooks: () => {
    return instance.get('books.json').then(response => {
      return response.data.books;
    });
  }
}

