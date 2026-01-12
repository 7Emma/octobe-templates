import React, { useState } from "react";
import { MoveRight, Menu, X, ShoppingCart, Leaf } from "lucide-react";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="bg-green-600 p-2 rounded-lg group-hover:bg-green-700 transition-colors duration-300">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
              Otobe<span className="text-green-600">.</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-8">
              <li>
                <a
                  href="#home"
                  className="relative text-gray-700 font-medium hover:text-green-600 transition-colors duration-300 group"
                >
                  Home
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
              <li>
                <a
                  href="#product"
                  className="relative text-gray-700 font-medium hover:text-green-600 transition-colors duration-300 group"
                >
                  Product
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
              <li>
                <a
                  href="#categorie"
                  className="relative text-gray-700 font-medium hover:text-green-600 transition-colors duration-300 group"
                >
                  Categories
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="relative text-gray-700 font-medium hover:text-green-600 transition-colors duration-300 group"
                >
                  About
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
            </ul>
          </nav>

          {/* Desktop CTA & Cart */}
          <div className="hidden md:flex items-center gap-4">
            <button className="relative p-2 text-gray-700 hover:text-green-600 transition-colors duration-300">
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-semibold">
                2
              </span>
            </button>

            <button className="group flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5">
              Shop Now
              <MoveRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-green-600 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-100 py-4 animate-fadeIn">
            <nav>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#home"
                    className="block text-gray-700 font-medium hover:text-green-600 hover:bg-green-50 px-4 py-2 rounded-lg transition-all duration-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#product"
                    className="block text-gray-700 font-medium hover:text-green-600 hover:bg-green-50 px-4 py-2 rounded-lg transition-all duration-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Product
                  </a>
                </li>
                <li>
                  <a
                    href="#categorie"
                    className="block text-gray-700 font-medium hover:text-green-600 hover:bg-green-50 px-4 py-2 rounded-lg transition-all duration-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Categories
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="block text-gray-700 font-medium hover:text-green-600 hover:bg-green-50 px-4 py-2 rounded-lg transition-all duration-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    About
                  </a>
                </li>
              </ul>
            </nav>

            <div className="mt-6 pt-6 border-t border-gray-100 space-y-3">
              <button className="w-full flex items-center justify-center gap-2 text-gray-700 hover:text-green-600 font-medium px-4 py-2.5 border border-gray-200 hover:border-green-600 rounded-lg transition-all duration-300">
                <ShoppingCart className="w-5 h-5" />
                Cart (2)
              </button>

              <button className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-all duration-300">
                Shop Now
                <MoveRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
