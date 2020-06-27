import *as axios from 'axios';

const instance = axios.create({
  baseURL: 'hhttps://oleg-irchishyn.github.io/E-shop/./'
});


export const booksAPI = {
  getBooks: () => {
    return instance.get('https://oleg-irchishyn.github.io/E-shop/./books.json').then(response => {
      return response.data.books;
    });
  }
}

