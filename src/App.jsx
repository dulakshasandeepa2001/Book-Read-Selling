import React from 'react';
import { Routes, Route, useNavigate, useParams } from 'react-router-dom';
import { books } from './data/books';
import './App.css';

import Header from './components/Header';
import BookCard from './components/BookCard';
import BookDetail from './components/BookDetail';
import SEOHead from './components/SEOHead';
import SearchPage from './pages/SearchPage';
import {
  TheGreatGatsbyPage,
  TheHobbitPage,
  TheGoodSisterPage,
  ModernLiteratureCollectionPage,
  MobyDickPage
} from './pages/books';
function Home() {
  return (
    <>
      <SEOHead />
      <div className="min-h-screen bg-gray-900 flex flex-col">
        <Header />
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-12 flex-1">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Discover Your Next Great Read
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Explore thousands of books, read online, or download for offline reading. 
              Your literary journey starts here.
            </p>

          </div>

          {/* Books Grid */}
          <div className="flex flex-wrap justify-center gap-8">
            {books.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </div>
        {/* Footer */}
        <footer className="bg-gray-800 border-t border-gray-700 mt-auto">
          <div className="container mx-auto px-4 py-8">
            <div className="text-center text-gray-400">
              <p className="font-semibold text-white">&copy; 2025 BookHub. All rights reserved.</p>
              <p className="mt-2">Your gateway to endless reading possibilities. Connect, discover, and enjoy books from every category.</p>
              <div className="mt-4 flex flex-wrap justify-center gap-4">
                <a href="#" className="text-pink-400 hover:underline">About</a>
                <a href="#" className="text-pink-400 hover:underline">Contact</a>
                <a href="#" className="text-pink-400 hover:underline">Privacy Policy</a>
                <a href="#" className="text-pink-400 hover:underline">Terms of Service</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

function CategoryPage() {
  const { category } = useParams();
  const filteredBooks = books.filter((book) => book.genre === category);
  return (
    <>
      <SEOHead title={`${category} Books | BookHub`} description={`Browse books in the ${category} category.`} />
      <div className="min-h-screen bg-gray-900 flex flex-col">
        <Header selectedCategory={category} />
        <div className="container mx-auto px-4 py-12 flex-1">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              {category} Books
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Explore the best books in {category}.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {filteredBooks.length > 0 ? (
              filteredBooks.map((book) => (
                <BookCard key={book.id} book={book} />
              ))
            ) : (
              <div className="w-full text-center text-gray-400">No books found in this category.</div>
            )}
          </div>
        </div>
        <footer className="bg-gray-800 border-t border-gray-700 mt-auto">
          <div className="container mx-auto px-4 py-8">
            <div className="text-center text-gray-400">
              <p className="font-semibold text-white">&copy; 2025 BookHub. All rights reserved.</p>
              <p className="mt-2">Your gateway to endless reading possibilities. Connect, discover, and enjoy books from every category.</p>
              <div className="mt-4 flex flex-wrap justify-center gap-4">
                <a href="#" className="text-pink-400 hover:underline">About</a>
                <a href="#" className="text-pink-400 hover:underline">Contact</a>
                <a href="#" className="text-pink-400 hover:underline">Privacy Policy</a>
                <a href="#" className="text-pink-400 hover:underline">Terms of Service</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

function BookDetailPage() {
  const { id } = useParams();
  const book = books.find((b) => String(b.id) === id);
  const navigate = useNavigate();
  if (!book) return <div className="text-white p-8">Book not found.</div>;
  return (
    <>
      <SEOHead 
        title={`${book.title} - Download & Read Online | BookHub`}
        description={book.fullDescription}
        keywords={`${book.title}, ${book.author}, ${book.genre}, download book, read online`}
      />
      <BookDetail book={book} onBack={() => navigate('/')} />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/book/:id" element={<BookDetailPage />} />
      <Route path="/category/:category" element={<CategoryPage />} />
      <Route path="/search" element={<SearchPage />} />
      
      {/* Individual book pages */}
      <Route path="/books/the-great-gatsby" element={<TheGreatGatsbyPage />} />
      <Route path="/books/the-hobbit" element={<TheHobbitPage />} />
      <Route path="/books/the-good-sister" element={<TheGoodSisterPage />} />
      <Route path="/books/modern-literature-collection" element={<ModernLiteratureCollectionPage />} />
      <Route path="/books/moby-dick" element={<MobyDickPage />} />
    </Routes>
  );
}

export default App;
