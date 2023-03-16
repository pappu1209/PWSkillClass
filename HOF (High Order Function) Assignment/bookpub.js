//  list of books
const books = [
    {
    title: "Harry Potter and the Deathly Hallows",
    author: "J.K. Rowling",
    year: 2007
    },
    {
    title: "The Hunger Games",
    author: "Suzanne Collins",
    year: 2008
    },
    {
    title: "The Time Traveler's Wife",
    author: "Audrey Niffenegger",
    year: 2003
    },
    {
    title: "A Thousand Splendid Suns",
    author: "Khaled Hosseini",
    year: 2007
    },
    {
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    year: 1997
    }
];

  // Use filter and map to create a new array with filtered and capitalized books
const filteredAndCapitalizedBooks = books
    .filter(book => book.year >= 2010)
    .map(book => ({ ...book, author: book.author.toUpperCase() }));

  // Print the new array of filtered and capitalized books
console.log(filteredAndCapitalizedBooks);
