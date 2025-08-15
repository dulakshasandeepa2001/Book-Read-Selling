import React from 'react';
import { ArrowLeft, Star, Download, ShoppingCart, Play } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { useNavigate } from 'react-router-dom';
import { books } from '../../data/books';
import SEOHead from '../../components/SEOHead';

const MobyDickPage = () => {
  const navigate = useNavigate();
  const book = books.find((b) => b.id === 5);
  
  if (!book) return null;

  return (
    <>
      <SEOHead 
        title={`${book.title} - Download & Read Online | BookHub`}
        description={book.fullDescription}
        keywords={`${book.title}, ${book.author}, ${book.genre}, download book, read online`}
      />
      <div className="min-h-screen bg-gray-900 text-white flex flex-col">
        <div className="container mx-auto px-4 py-8 flex-1">
          <Button 
            onClick={() => navigate('/')}
            variant="ghost" 
            className="mb-6 text-white hover:text-gray-300"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Books
          </Button>

          <div className="flex flex-col md:flex-row items-center mb-8 gap-8">
            <img src={book.coverImage} alt={book.title} className="w-64 h-80 object-cover rounded-lg shadow-lg mb-6 md:mb-0" />
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl font-bold mb-2">
                {book.title} ({book.publicationYear}) - Download Full Book
              </h1>
              <div className="flex items-center justify-center md:justify-start mb-4">
                <Star className="w-5 h-5 text-yellow-400 fill-current mr-1" />
                <span className="text-lg font-semibold text-yellow-400">
                  {book.rating}/10({book.reviews.toLocaleString()} reviews)
                </span>
              </div>
            </div>
          </div>

          {/* Download Options */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold mb-6">Download Options</h2>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Button 
                className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full text-lg"
                onClick={() => window.open(book.downloadLink, '_blank')}
              >
                <Play className="w-5 h-5 mr-2" />
                Read Online
              </Button>
              
              <Button 
                className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full text-lg"
                onClick={() => window.open(book.downloadLink, '_blank')}
              >
                <Download className="w-5 h-5 mr-2" />
                Click to Download
              </Button>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 max-w-2xl mx-auto">
              <p className="text-gray-300 mb-2">
                Click the download button 5 more time(s) to access download options
              </p>
              <p className="text-gray-400 text-sm mb-1">
                Runtime: {book.genre} | {book.publicationYear}
              </p>
              <p className="text-gray-400 text-sm mb-1">
                Multiple format options: PDF, EPUB, MOBI
              </p>
              <p className="text-gray-400 text-sm">
                File sizes: 2.5 MB - 15.2 MB
              </p>
            </div>
          </div>

          {/* About the Book */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold mb-6 text-center">About the Book</h2>
            
            <div className="bg-gray-800 rounded-lg p-8">
              <p className="text-gray-300 leading-relaxed mb-6">
                {book.fullDescription}
              </p>
              
              {/* Book Details Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <h3 className="text-gray-400 text-sm font-medium mb-2">Publication Date</h3>
                  <p className="text-white font-semibold">{book.publicationYear}</p>
                </div>
                
                <div>
                  <h3 className="text-gray-400 text-sm font-medium mb-2">Runtime</h3>
                  <p className="text-white font-semibold">Various Pages</p>
                </div>
                
                <div>
                  <h3 className="text-gray-400 text-sm font-medium mb-2">Writer</h3>
                  <p className="text-white font-semibold">{book.author}</p>
                </div>
                
                <div>
                  <h3 className="text-gray-400 text-sm font-medium mb-2">Genre</h3>
                  <p className="text-white font-semibold">{book.genre}</p>
                </div>
                
                <div>
                  <h3 className="text-gray-400 text-sm font-medium mb-2">Publisher</h3>
                  <p className="text-white font-semibold">Various Publishers</p>
                </div>
                
                <div>
                  <h3 className="text-gray-400 text-sm font-medium mb-2">Language</h3>
                  <p className="text-white font-semibold">English</p>
                </div>
                
                <div>
                  <h3 className="text-gray-400 text-sm font-medium mb-2">Country</h3>
                  <p className="text-white font-semibold">Various</p>
                </div>
                
                <div>
                  <h3 className="text-gray-400 text-sm font-medium mb-2">Rating</h3>
                  <p className="text-white font-semibold">{book.rating}/10</p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="text-center mt-8">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full text-lg"
                onClick={() => window.open(book.downloadLink, '_blank')}
              >
                <Download className="w-5 h-5 mr-2" />
                Read Book
              </Button>
              
              <Button 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg"
                onClick={() => window.open(book.buyingLink, '_blank')}
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Buy Book
              </Button>
            </div>
          </div>
        </div>
        {/* Footer */}
        <footer className="bg-gray-800 border-t border-gray-700 mt-auto">
          <div className="container mx-auto px-4 py-8">
            <div className="text-center text-gray-400">
              <p>&copy; 2024 BookHub. All rights reserved.</p>
              <p className="mt-2">Your gateway to endless reading possibilities</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default MobyDickPage;
