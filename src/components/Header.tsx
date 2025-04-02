import React, { useState } from 'react';
import { Search, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { ASSET_PATHS } from '../lib/assets';

const Header = () => {
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [showResults, setShowResults] = useState(false);
  const location = useLocation();

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setShowResults(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navLinkClasses = (path: string) => `
    px-6 py-2 rounded transition-colors text-[#000080] font-extrabold text-2xl
    ${isActive(path) ? 'bg-white/20' : 'hover:bg-white/20'}
  `;

  const showMarquee = location.pathname === '/';

  return (
    <header className="bg-[#FFFFF0] header-container">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center">
          <div className="flex flex-col items-center">
            <Link to="/">
              <img 
                src={ASSET_PATHS.logos.main}
                alt="Uttar Pradesh Council for Sports & Education"
                className="h-20 cursor-pointer"
              />
            </Link>
            <h1 className="text-2xl font-bold mt-2 text-[#FF9933] animate-pulse">
              UPCSE
            </h1>
          </div>
          
          <div className="flex items-center space-x-8 ml-8">
            <img 
              src={ASSET_PATHS.logos.olympic}
              alt="U.P. Olympic association" 
              className="h-16"
            />
            <img 
              src={ASSET_PATHS.logos.nehru}
              alt="Nehru Yuva Kendra Sangathan" 
              className="h-16"
            />
            <img 
              src={ASSET_PATHS.logos.indian}
              alt="Indian Council for Sports & Education" 
              className="h-16"
            />
            <img 
              src={ASSET_PATHS.logos.international}
              alt="International Council for Sports & Education" 
              className="h-16"
            />
          </div>

          <div className="ml-auto">
            <div className="relative">
              <form onSubmit={handleSearch}>
                <input
                  type="text"
                  placeholder={isSearchExpanded ? "Search certificates..." : ""}
                  className={`border rounded-full py-2 px-4 w-full ${isSearchExpanded ? 'w-64 opacity-100' : 'w-10 opacity-0'} transition-all duration-300`}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => setIsSearchExpanded(!isSearchExpanded)}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2"
                >
                  <Search className="h-10 w-10 text-gray-600" />
                </button>
              </form>

              {showResults && searchResults.length > 0 && (
                <div className="absolute top-full left-0 w-full mt-2 bg-white rounded-lg shadow-lg z-50">
                  {searchResults.map((result) => (
                    <div key={result.id} className="p-4 border-b hover:bg-gray-50">
                      <p className="font-semibold">{result.student_name}</p>
                      <p className="text-sm text-gray-600">
                        Certificate: {result.certificate_no} | {result.sport} - {result.event}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <nav className="nav-gradient">
        <div className="container mx-auto">
          <div className="flex items-center justify-between text-white py-4">
            <Link to="/" className={navLinkClasses('/')}>HOME</Link>
            <Link to="/about" className={navLinkClasses('/about')}>ABOUT US</Link>
            <Link to="/gallery" className={navLinkClasses('/gallery')}>GALLERY</Link>
            <Link to="/student-records" className={navLinkClasses('/student-records')}>STUDENT RECORDS</Link>
            <div className="relative group">
              <Link to="/district-secretaries" className={`${navLinkClasses('/district-secretaries')} flex items-center`}>
                DISTRICT SECRETARIES
                <ChevronDown className="ml-1 h-5 w-5" />
              </Link>
              <div className="absolute hidden group-hover:block w-48 bg-white shadow-lg rounded-lg mt-2 z-50">
                <div className="py-2">
                  {['Lucknow', 'Kanpur', 'Varanasi', 'Agra', 'Prayagraj', 'Gorakhpur', 'Meerut', 'Ghaziabad'].map(district => (
                    <Link 
                      key={district}
                      to={`/district/${district.toLowerCase()}`} 
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      {district}
                    </Link>
                  ))}
                  <Link to="/district-secretaries" className="block px-4 py-2 text-blue-600 hover:bg-gray-100">
                    View More →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {showMarquee && (
        <div className="marquee-gradient py-3">
          <div className="overflow-hidden whitespace-nowrap">
            <div className="inline-block animate-marquee">
              <span className="text-xl font-bold px-4 text-white">
                NATIONAL GAMES COMING SOON • REGISTER NOW FOR UPCOMING TOURNAMENTS • SPORTS TALENT HUNT PROGRAM OPEN FOR REGISTRATIONS • EVENT PICTURES OF UPCSE STATE GAMES • 24TH ICSE NATIONAL GAMES COMING SOON
              </span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;