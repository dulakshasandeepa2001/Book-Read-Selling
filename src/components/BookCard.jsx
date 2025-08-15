// ...existing code...
import { useState } from 'react';
import { Download, Star } from 'lucide-react';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';

const BookCard = ({ book }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  // Function to get the path for each book
  const getBookPath = (bookId) => {
    switch(bookId) {
      case 1: return '/books/the-great-gatsby';
      case 2: return '/books/the-hobbit';
      case 3: return '/books/the-good-sister';
      case 4: return '/books/modern-literature-collection';
      case 5: return '/books/moby-dick';
      default: return `/book/${bookId}`;
    }
  };

  return (
    <div 
      className="relative group cursor-pointer transition-all duration-300 hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => navigate(getBookPath(book.id))}
    >
      <div className="relative overflow-hidden rounded-lg shadow-lg">
        <img 
          src={book.coverImage} 
          alt={book.title}
          className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        {/* Overlay on hover */}
        {isHovered && (
          <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center transition-opacity duration-300">
            <div className="text-center text-white p-4">
              <Button 
                className="mb-4 bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(getBookPath(book.id));
                }}
              >
                <Download className="w-4 h-4 mr-2" />
                Download
              </Button>
              <p className="text-sm leading-relaxed max-w-xs">
                {book.shortDescription}
              </p>
            </div>
          </div>
        )}
      </div>
      
      {/* Book info */}
      <div className="mt-4 text-center">
        <h3 className="text-lg font-semibold text-white mb-1">{book.title}</h3>
        <p className="text-gray-400 text-sm">{book.publicationYear}</p>
        <div className="flex items-center justify-center mt-2">
          <Star className="w-4 h-4 text-yellow-400 fill-current" />
          <span className="text-gray-300 text-sm ml-1">{book.rating}</span>
        </div>
      </div>
    </div>
  );
};

export default BookCard;

