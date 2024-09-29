// src/app/layout.tsx

import './globals.css';
import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="bg-blue-900 bg-opacity-70 backdrop-blur-md rounded-lg p-4">
          <div className="flex justify-between items-center">
            <div className="logo">GenVR</div>
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <a href="#" className="glass-button">Our Products</a>
                </li>
                <li>
                  <a href="#" className="glass-button">Creations</a>
                </li>
                <li>
                  <a href="#" className="glass-button">Image Model Guide</a>
                </li>
                <li>
                  <a href="#" className="glass-button">Pricing</a>
                </li>
              </ul>
            </nav>
            <button className="glass-button">Sign In</button>
            <button className="glass-button ml-2">Sign Up</button>
          </div>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
