import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '../components/Header';
import BookCard from '../components/BookCard';
import SEOHead from '../components/SEOHead';
import { books } from '../data/books';

function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query') || '';
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    // Search logic
    if (query) {
      const lowercaseQuery = query.toLowerCase();
      const results = books.filter(
        (book) =>
          book.title.toLowerCase().includes(lowercaseQuery) ||
          book.author.toLowerCase().includes(lowercaseQuery) ||
          (book.genre && book.genre.toLowerCase().includes(lowercaseQuery)) ||
          book.shortDescription.toLowerCase().includes(lowercaseQuery) ||
          book.fullDescription.toLowerCase().includes(lowercaseQuery)
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [query]);

  return (
    <>
      <SEOHead 
        title={`Search: ${query} | BookHub`}
        description={`Search results for "${query}" on BookHub.`}
      />
      <div className="min-h-screen bg-gray-900 flex flex-col">
        <Header />
        <div className="container mx-auto px-4 py-12 flex-1">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Search Results: {query}
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Found {searchResults.length} {searchResults.length === 1 ? 'result' : 'results'} for your search.
            </p>
          </div>
          
          {/* Search Results Grid */}
          <div className="flex flex-wrap justify-center gap-8">
            {searchResults && searchResults.length > 0 ? (
              searchResults.map((book) => (
                <BookCard key={book.id} book={book} />
              ))
            ) : (
              <div className="w-full text-center text-gray-400">
                No books found matching your search. Try different keywords or browse our categories.
              </div>
            )}
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

export default SearchPage;
