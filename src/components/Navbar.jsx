import { useState } from "react";
import { TfiMenu } from "react-icons/tfi";

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-zinc-800">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Título na Navbar */}
        <h1 className="lg:hidden text-2xl font-bold text-white">Calendara</h1>

        {/* Botão de menu para telas pequenas */}
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={toggleMobileMenu}
        >
          <TfiMenu />
        </button>

        {/* Lista de itens da Navbar para telas grandes */}
        <div className="hidden lg:flex items-center space-x-7">
          <h1 className="text-2xl font-bold text-white">Calendara</h1>
          <ul className="flex space-x-5">
            <li>
              <a href={`/`} className="text-white">
                Home
              </a>
            </li>
            <li>
              <a href={`/about`} className="text-white">
                About
              </a>
            </li>
            <li>
              <a href={`/contact`} className="text-white">
                Contact
              </a>
            </li>
            <li>
              <a href={`/pricing`} className="text-white">
                Pricing
              </a>
            </li>
          </ul>
        </div>

        {/* Menu mobile */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-16 left-0 w-full bg-zinc-800 p-4">
            <ul className="flex flex-col space-y-3">
              <li>
                <a href={`/`} className="text-white">
                  Home
                </a>
              </li>
              <li>
                <a href={`/about`} className="text-white">
                  About
                </a>
              </li>
              <li>
                <a href={`/contact`} className="text-white">
                  Contact
                </a>
              </li>
              <li>
                <a href={`/pricing`} className="text-white">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
        )}

        {/* Lista de itens da Navbar para telas pequenas */}
        <ul className="hidden lg:flex space-x-5">
          <li>
            <a href={`/login`} className="text-white">
              Login
            </a>
          </li>
          <li>
            <a href={`/signup`} className="text-white">
              Sign Up
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
