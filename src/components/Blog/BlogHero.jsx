import { Search, User, Heart, ShoppingBag } from "lucide-react";

export default function BlogHero() {
  return (
    <div className="bg-[#d7abab] min-h-[300px] flex flex-col items-center justify-center relative">
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-10 py-6">
        {/* Logo */}
        <h1 className="text-2xl font-semibold tracking-wide">LUCHIANA</h1>

        {/* Menu */}
        <ul className="flex gap-6 uppercase text-sm font-medium">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">Shop</li>
          <li className="cursor-pointer">Headers</li>
          <li className="cursor-pointer">Blog</li>
          <li className="cursor-pointer">Pages</li>
          <li className="cursor-pointer">Mega</li>
          <li className="cursor-pointer">Contact</li>
        </ul>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <Search className="w-5 h-5 cursor-pointer" />
          <User className="w-5 h-5 cursor-pointer" />
          <div className="relative">
            <Heart className="w-5 h-5 cursor-pointer" />
            <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              1
            </span>
          </div>
          <ShoppingBag className="w-5 h-5 cursor-pointer" />
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center mt-10">
        <h1 className="text-5xl font-semibold tracking-wide">BLOG</h1>
        <p className="text-sm mt-2">HOME &gt; BLOG</p>
      </div>
    </div>
  );
}
