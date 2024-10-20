export async function generateStaticParams() {
    const response = await fetch('https://kenleyli666.github.io/booksApi/books.json');
    const data = await response.json();
    
    return data.books.map(book => ({
        bookId: book.id.toString(),
    }));
}

export default async function BookDetailServer({ params }) {
    const { bookId } = params;

    const response = await fetch('https://kenleyli666.github.io/booksApi/books.json');
    const data = await response.json();
    const book = data.books.find(b => b.id === bookId);

    return (
      <BookDetailClient book={book} />
    );
}
