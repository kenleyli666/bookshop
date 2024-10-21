import BookDetailClient from './BookDetailClient';

export async function generateStaticParams() {
    const response = await fetch('https://kenleyli666.github.io/booksApi/books.json');
    const data = await response.json();
    
    const params = data.books.map(book => ({
        bookId: book.id.toString(),
    }));
    
    console.log(params); // 記錄以驗證
    return params;
}

export default async function BookDetailServer({ params }) {
    const { bookId } = params;

    try {
        const response = await fetch('https://kenleyli666.github.io/booksApi/books.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const book = data.books.find(b => b.id === bookId);

        console.log(book); // 記錄以驗證

        if (!book) {
            return <div>書籍未找到。</div>;
        }

        return <BookDetailClient book={book} />;
    } catch (error) {
        console.error('Fetch error:', error);
        return <div>書籍未找到。</div>;
    }
}
