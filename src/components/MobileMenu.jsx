import { navContents } from "../constants/constant.jsx"

const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center
                     transition-all duration-300 ease-in-out ${menuOpen ? 'h-screen opacity-100 pointer-events-auto' : 'h-0 opacity-0 pointer-events-none'} `}>
      <button onClick={() => setMenuOpen(false)} className="absolute top-5 right-6 text-white text-3xl focus:outline-none cursor-pointer" aria-label="Close Menu ">&times;</button>
      <div className="flex flex-col text-xl">
        {navContents.navItems.map((item, index) => (
          <a key={index} onClick={() => setMenuOpen(false)} className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
                        ${menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}
              `} href={navContents.navItemsHref[index]}>{item}</a>
        ))}
      </div>


    </div >
  )
}

export default MobileMenu; 
