/* METHOD ONE : json-server api  */ 
/* 在github get自己的.json */
/* 這檔案放在'scr/pages/api/books.jsx' */
// import axios from 'axios';

// export default async function handler(req, res) {
//   try {
//     const response = await axios.get('https://kenleyli666.github.io/booksApi/books.json');
//     res.status(200).json(response.data);
//   } catch (error) {
//     res.status(500).json({ error: 'Error fetching the books data' });
//   }
// }

import axios from 'axios';
export default async function handler(req, res) {
  const booksUrl = 'https://kenleyli666.github.io/booksApi/books.json';
  try {
    const response = await axios.get(booksUrl);
    const books = response.data.books;
    res.status(200).json(books);
  } catch (error) {
    console.error('Error fetching books:', error);
    res.status(500).json({ message: 'Error fetching books data' });
  }
}
