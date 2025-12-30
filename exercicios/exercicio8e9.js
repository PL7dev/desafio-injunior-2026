const booksByCategory = [
  {
    category: "Romance",
    books: [
      { title: "O Sol Também é Uma Estrela", author: "Nicola Yoon" },
      { title: "O Noivo da Minha Melhor Amiga", author: "Emily Giffin" },
      { title: "Orgulho e Preconceito", author: "Jane Austen" },
    ],
  },
  {
    category: "Fantasia",
    books: [
      { title: "Harry Potter e a Pedra Filosofal", author: "J.K. Rowling" },
      { title: "O Hobbit", author: "J.R.R. Tolkien" },
      { title: "Eragon", author: "Christopher Paolini" },
      { title: "O Nome do Vento", author: "Patrick Rothfuss" },
    ],
  },
  {
    category: "Suspense",
    books: [
      { title: "A Garota no Trem", author: "Paula Hawkins" },
      { title: "O Silêncio dos Inocentes", author: "Thomas Harris" },
    ],
  },
  {
    category: "Ficção Científica",
    books: [
      { title: "Duna", author: "Frank Herbert" },
      { title: "Neuromancer", author: "William Gibson" },
      { title: "Fundação", author: "Isaac Asimov" },
      { title: "1984", author: "George Orwell" },
      { title: "O Fim da Infância", author: "Arthur C. Clarke" },
    ],
  },
];

function countBooksInCategory(categories) {
    const results = {};

    for (const category of categories) {
        results[category.category] = category.books.length;
    }

    return results;
}

const booksSeparatedByCategory = countBooksInCategory(booksByCategory);

console.log(booksSeparatedByCategory);

function authors(cathegories) {
    const authors = [];

    for (const category of cathegories) {
        for (const book of category.books) {
            if (!authors.includes(book.author)) {
                authors.push(book.author);
            }
        }
    }

    return authors;
}

const authorsList = authors(booksByCategory);
console.log(authorsList);