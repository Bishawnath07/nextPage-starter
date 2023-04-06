import React from 'react';
import { Link, useLoaderData, useNavigation } from 'react-router-dom';
import Book from '../Book/Book';
import LoadingSpinner from '../LoaderSpinner/LoaderSpinner';

const Books = () => {
    const navigation = useNavigation();
    if(navigation.state === "loading"){
        return <LoadingSpinner></LoadingSpinner>
    }
    
    const booksData = useLoaderData();
    const books = booksData.books;
    

    return (
        <div className='my-container'>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
            {
                books.map(book =><Book
                key={book.isbn13}
                book={book}
                ></Book>)
            }
        </div>
    </div>
    );
};

export default Books;