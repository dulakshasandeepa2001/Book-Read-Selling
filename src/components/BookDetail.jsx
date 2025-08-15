import React from 'react';
import { Button } from './ui/button';

const BookDetail = ({ book, onBack }) => {
  if (!book) return null;

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <div className="container mx-auto px-4 py-8 flex-1">
        {/* Back Button */}
        <button 
          onClick={onBack}
          className="flex items-center text-sm text-gray-400 hover:text-white mb-8"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Back to Books
        </button>

        {/* Book Header */}
        <div className="flex flex-col md:flex-row items-start mb-12 gap-8">
          {/* Book Cover - White border frame */}
          <div className="border-4 border-white bg-white rounded-sm w-48 h-auto mb-6 md:mb-0 flex-shrink-0">
            <img src={book.coverImage} alt={book.title} className="w-full h-full object-cover" />
          </div>
          
          {/* Book Title and Rating */}
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-2">
              {book.title} ({book.publicationYear}) - Download Full Book
            </h1>
            <div className="flex items-center">
              <div className="flex items-center text-yellow-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
              </div>
              <span className="text-sm font-semibold text-yellow-400 ml-1">
                {book.rating}/10({book.reviews.toLocaleString()} reviews)
              </span>
            </div>
          </div>
        </div>

        {/* Download Options */}
        <div className="text-center mb-12">
          <h2 className="text-xl font-semibold mb-6">Download Options</h2>
          
          <div className="flex flex-row gap-4 justify-center mb-6">
            <Button 
              className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full text-sm flex items-center"
              onClick={() => window.open(book.downloadLink, '_blank')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="mr-2">
                <polygon points="5 3 19 12 5 21 5 3"/>
              </svg>
              Read Online
            </Button>
            
            <Button 
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full text-sm flex items-center"
              onClick={() => window.open(book.downloadLink, '_blank')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Click to Download
            </Button>
          </div>

          <div className="bg-gray-800 bg-opacity-50 rounded-md p-4 max-w-lg mx-auto text-sm">
            <p className="text-gray-300 mb-2">
              Click the download button 5 more time(s) to access download options
            </p>
            <p className="text-gray-400 text-xs mb-1">
              Runtime: {book.genre} | {book.publicationYear}
            </p>
            <p className="text-gray-400 text-xs mb-1">
              Multiple format options: PDF, EPUB, MOBI
            </p>
            <p className="text-gray-400 text-xs">
              File sizes: 2.5 MB - 15.2 MB
            </p>
          </div>
        </div>

        {/* About the Book */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-semibold mb-6 text-center">About the Book</h2>
          
          <div className="bg-gray-800 bg-opacity-50 rounded-md p-6">
            <p className="text-gray-300 leading-relaxed mb-8 text-sm">
              {book.fullDescription}
            </p>
            
            {/* Book Details Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <h3 className="text-gray-400 text-xs mb-1">Publication Date</h3>
                <p className="text-white text-sm">{book.publicationYear}</p>
              </div>
              
              <div>
                <h3 className="text-gray-400 text-xs mb-1">Runtime</h3>
                <p className="text-white text-sm">Various Pages</p>
              </div>
              
              <div>
                <h3 className="text-gray-400 text-xs mb-1">Writer</h3>
                <p className="text-white text-sm">{book.author}</p>
              </div>
              
              <div>
                <h3 className="text-gray-400 text-xs mb-1">Genre</h3>
                <p className="text-white text-sm">{book.genre}</p>
              </div>
              
              <div>
                <h3 className="text-gray-400 text-xs mb-1">Publisher</h3>
                <p className="text-white text-sm">Various Publishers</p>
              </div>
              
              <div>
                <h3 className="text-gray-400 text-xs mb-1">Language</h3>
                <p className="text-white text-sm">English</p>
              </div>
              
              <div>
                <h3 className="text-gray-400 text-xs mb-1">Country</h3>
                <p className="text-white text-sm">Various</p>
              </div>
              
              <div>
                <h3 className="text-gray-400 text-xs mb-1">Rating</h3>
                <p className="text-white text-sm">{book.rating}/10</p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="text-center mt-8">
          <div className="flex flex-row gap-4 justify-center">
            <Button 
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full text-sm flex items-center"
              onClick={() => window.open(book.downloadLink, '_blank')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <path d="M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4M17 9l-5 5-5-5M12 12.8V2.5"/>
              </svg>
              Read Book
            </Button>
            
            <Button 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-sm flex items-center"
              onClick={() => window.open(book.buyingLink, '_blank')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <circle cx="9" cy="21" r="1"/>
                <circle cx="20" cy="21" r="1"/>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
              </svg>
              Buy Book
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;

