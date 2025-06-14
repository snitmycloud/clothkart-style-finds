
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart, User, Menu, X, Search, Heart } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/809cad4e-56cc-42bc-b4eb-0ff24c286b1f.png" 
              alt="ClothKart Logo" 
              className="w-10 h-10 mr-3"
            />
            <span className="text-2xl font-bold bg-gradient-to-r from-brand-teal to-brand-orange bg-clip-text text-transparent">
              ClothKart
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-brand-teal transition-colors font-medium">Home</a>
            <a href="#" className="text-gray-700 hover:text-brand-teal transition-colors font-medium">Saris</a>
            <a href="#" className="text-gray-700 hover:text-brand-teal transition-colors font-medium">Kids</a>
            <a href="#" className="text-gray-700 hover:text-brand-teal transition-colors font-medium">Men</a>
            <a href="#" className="text-gray-700 hover:text-brand-teal transition-colors font-medium">Sale</a>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex items-center flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="relative">
              <Heart className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 bg-brand-orange text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Button>
            <Button variant="ghost" size="sm" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 bg-brand-orange text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Button>
            <Button variant="ghost" size="sm">
              <User className="h-5 w-5" />
            </Button>
            <Button className="bg-brand-teal hover:bg-brand-teal/90 text-white">
              Sign In
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for products..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
              <nav className="flex flex-col space-y-2">
                <a href="#" className="text-gray-700 hover:text-brand-teal py-2 font-medium">Home</a>
                <a href="#" className="text-gray-700 hover:text-brand-teal py-2 font-medium">Saris</a>
                <a href="#" className="text-gray-700 hover:text-brand-teal py-2 font-medium">Kids</a>
                <a href="#" className="text-gray-700 hover:text-brand-teal py-2 font-medium">Men</a>
                <a href="#" className="text-gray-700 hover:text-brand-teal py-2 font-medium">Sale</a>
              </nav>
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <div className="flex items-center space-x-4">
                  <Button variant="ghost" size="sm" className="relative">
                    <Heart className="h-5 w-5" />
                    <span className="absolute -top-2 -right-2 bg-brand-orange text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      0
                    </span>
                  </Button>
                  <Button variant="ghost" size="sm" className="relative">
                    <ShoppingCart className="h-5 w-5" />
                    <span className="absolute -top-2 -right-2 bg-brand-orange text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      0
                    </span>
                  </Button>
                </div>
                <Button className="bg-brand-teal hover:bg-brand-teal/90 text-white">
                  Sign In
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
