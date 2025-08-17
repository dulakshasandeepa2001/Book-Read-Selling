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
      <div className="books-container">
      <div className="book-cover-container" style={{ width: '150px' }}>
        <img 
          src={book.coverImage} 
          alt={book.title}
          className="book-cover transition-transform duration-300 group-hover:scale-105"
        />
        {/* Overlay on hover */}
        {isHovered && (
          <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center transition-opacity duration-300 rounded-lg">
            <div className="text-center text-white p-2">
              <Button 
                className="mb-2 bg-pink-500 hover:bg-pink-600 text-white px-4 py-1 rounded-full text-xs"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(getBookPath(book.id));
                }}
              >
                <Download className="w-3 h-3 mr-1" />
                Download
              </Button>
              <p className="text-xs leading-tight max-w-[130px] line-clamp-3">
                {book.shortDescription}
              </p>
            </div>
          </div>
        )}
      </div>
     </div>
      
      {/* Book info */}
      <div className="mt-3 text-center" style={{ width: '150px' }}>
        <h3 className="text-base font-semibold text-white mb-0.5 truncate px-1">{book.title}</h3>
        <p className="text-gray-400 text-xs">{book.publicationYear}</p>
        <div className="flex items-center justify-center mt-1">
          <Star className="w-3 h-3 text-yellow-400 fill-current" />
          <span className="text-gray-300 text-xs ml-1">{book.rating}</span>
        </div>
      </div>
    </div>
  );
};

export default BookCard;

