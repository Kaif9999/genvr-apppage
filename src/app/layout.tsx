// src/app/layout.tsx
'use client'
import './globals.css';
import { ReactNode, useState } from 'react';
import { FaSignInAlt, FaUserPlus, FaBars } from 'react-icons/fa';

export default function Layout({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <html lang="en">
      <body className="bg-black text-white">
        <header className="flex justify-between items-center p-2">
          <div className="text-white font-bold text-xl ml-2">GENVR</div>
          <nav className="bg-blue-600 bg-opacity-50 rounded-full px-4 sticky top-0 py-2 mx-auto">
            <ul className={`flex justify-center space-x-4 text-white ${menuOpen ? 'active' : ''}`}>
              <li className="relative group">
                <a href="#" className="nav-link">Our Products</a>
                <ul className="absolute hidden group-hover:block bg-blue-600 text-black mt-2 rounded shadow-lg">
                  <li><a href="#" className="block px-4 py-2">Product 1</a></li>
                  <li><a href="#" className="block px-4 py-2">Product 2</a></li>
                  <li><a href="#" className="block px-4 py-2">Product 3</a></li>
                </ul>
              </li>
              <li className="relative group">
                <a href="#" className="nav-link">Creation</a>
                <ul className="absolute hidden group-hover:block bg-blue-600 text-black mt-2 rounded shadow-lg">
                  <li><a href="#" className="block px-4 py-2">Creation 1</a></li>
                  <li><a href="#" className="block px-4 py-2">Creation 2</a></li>
                  <li><a href="#" className="block px-4 py-2">Creation 3</a></li>
                </ul>
              </li>
              <li>
                <a href="#" className="nav-link">Image model guide</a>
              </li>
              <li>
                <a href="#" className="nav-link">Pricing</a>
              </li>
              
            </ul>
            <div className="hamburger-menu" onClick={() => setMenuOpen(!menuOpen)}>
              <FaBars />
            </div>
            
          </nav>
          <ul><li className="nav-button flex items-center space-x-2">
                <FaSignInAlt />
                <span>Signin</span>
              </li>
              <li className="nav-button flex items-center space-x-2">
                <FaUserPlus />
                <span>Signup</span>
              </li></ul>
        </header>
        <section className="bg-yellow-400 text-black text-center p-1">
          <p>Presenting impersonata 2.0 with 1000+ characters.</p>
        </section>
        <main>{children}</main>
      </body>
    </html>
  );
}