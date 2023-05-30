function filterBooks(...books) {
    const booksWithU = [];
    const otherBooks = [];
  
    for (let i = 0; i < books.length; i++) {
      const book = books[i];
      if (book.includes('у') || book.includes('У')) {
        booksWithU.push(book);
      } else {
        otherBooks.push(book);
      }
    }
    console.log('Названия книг с буквой "у": ');
    for (let i = 0; i < booksWithU.length; i++) {
      console.log(booksWithU[i]);
    }
    console.log('Остальные названия книг:');
    for (let i = 0; i < otherBooks.length; i++) {
      console.log(otherBooks[i]);
    }
  }

  filterBooks('Гарри Поттер', 'Улисс', 'Преступление и наказание', 'Мастер и Маргарита', '1984');
  