import { Search, User, Heart, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";



const PageHeader = ({ title, bgColor = "#D6C4B5" }) => {
  return (
    <div className={`w-full py-6 px-10`} style={{ backgroundColor: bgColor }}>
      {/* Navbar */}
      <div className="flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-semibold tracking-widest">LUCHIANA</h1>

        {/* Menu Links */}
        <nav className="flex space-x-6 text-sm font-medium uppercase">
        <ul className="hidden md:flex gap-8 text-lg">
          <Link to='/' className="hover:opacity-75 cursor-pointer">HOME</Link>
          <Link to='/shop' className="hover:opacity-75 cursor-pointer">SHOP</Link>
          <Link to='/headers' className="hover:opacity-75 cursor-pointer">HEADERS</Link>
          <Link to='/blog' className="hover:opacity-75 cursor-pointer">BLOG</Link>
          <Link to='/pages' className="hover:opacity-75 cursor-pointer">PAGES</Link>
          <Link to='/mega' className="hover:opacity-75 cursor-pointer">MEGA</Link>
          <Link to='/contact' className="hover:opacity-75 cursor-pointer">CONTACT</Link>
        </ul>
        </nav>

        {/* Icons */}
        <div className="flex space-x-4 items-center">
          <Search className="w-5 h-5 cursor-pointer" />
          <User className="w-5 h-5 cursor-pointer" />
          <Link to='/wishlist' className="cursor-pointer">
          <div className="relative">    
            <Heart className="w-5 h-5 cursor-pointer" />
            <span className="absolute -top-2 -right-2 bg-white text-black text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
              1
            </span>
          </div>
          </Link>
          <ShoppingBag className="w-5 h-5 cursor-pointer" />
        </div>
      </div>

      {/* Dynamic Page Title */}
      <div className="text-center mt-10">
        <h2 className="text-4xl my-20  font-light uppercase tracking-widest">{title}</h2>
        <p className="text-sm mt-9 text-gray-600">Home &gt; {title}</p>
      </div>
    </div>
  );
};

export default PageHeader;
