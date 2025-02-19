import { useEffect } from "react";
import { navContents } from "../constants/constant";

// eslint-disable-next-line react/prop-types
const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {}, []);
  return (
    <nav className='fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg '>
      <div className='max-w-5xl mx-auto px-4'>
        <div className='flex justify-between items-center h-16'>
          <a
            href='#home'
            className='text-md md:text-xl font-mono font-bold text-white'>
            {navContents.logoMain}
            <span className='text-blue-500'>{navContents.logoSpan}</span>
          </a>
          <div
            className='h-5 w-7 relative cursor-pointer z-40 md:hidden'
            onClick={() => setMenuOpen((prev) => !prev)}>
            &#9776;
          </div>
          <div className='hidden md:flex items-center space-x-8'>
            {navContents.navItems.map((item, index) => (
              <a
                key={index}
                className='text-gray-300 hover:text-white transition-colors'
                href={navContents.navItemsHref[index]}>
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
