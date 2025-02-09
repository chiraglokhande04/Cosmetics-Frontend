import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { IoLocationOutline, IoMailOutline, IoTimeOutline, IoCallOutline } from "react-icons/io5";
import {Link} from "react-router-dom";

export default function Footer() {
  return (
    <footer className="px-20 bg-black text-white p-10 relative">

      <div className="mb-20 flex justify-center gap-4 ">
        <Link to='/about' className="hover:text-yellow-200"><span>ABOUT US</span></Link>
        <span>·</span>
        <Link to='/team' className="hover:text-yellow-200"><span>Our team</span></Link>
        <span>·</span>
        <Link to='/faq' className="hover:text-yellow-200"><span>FAQ</span></Link>
        <span>·</span>
        <Link to='/maintenance' className="hover:text-yellow-200"><span>Maintenance mode</span></Link>
        <span>·</span>
        <Link to='/contact' className="hover:text-yellow-200"><span>Contact</span></Link>
      </div>
      <div className=" max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact Info */}
        <div className="space-y-2">
          <p className="flex items-center gap-2"><IoCallOutline /> +123 488 9652</p>
          <p className="flex items-center gap-2"><IoLocationOutline /> 25 West 21th Street, Miami FL, USA</p>
          <p className="flex items-center gap-2"><IoMailOutline /> info@luchiana.com</p>
          <p className="flex items-center gap-2"><IoTimeOutline /> Mon-Fri: 10:00 - 18:00</p>
        </div>

        {/* Center Branding & Socials */}
        <div className="text-center flex justify-center items-center flex-col">
          <h2 className="text-2xl font-bold tracking-widest">LUCHIANA</h2>
          <div className="flex justify-center gap-4 mt-4 text-lg">
            <FaFacebookF />
            <FaInstagram />
            <FaYoutube />
          </div>
        </div>

        {/* Description */}
        <div className=" text-right text-gray-100">
          <p className="text-sm">Our formulas are made with natural, organic, and cruelty-free ingredients that are gentle, effective, and good for you and the environment.</p>
          <a href="#" className="block mt-2 text-sm underline">READ MORE</a>
        </div>
      </div>

      {/* Bottom Links */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
        <p>&copy; 2020 LUCHIANA Theme. All rights reserved.</p>
        <div className="flex justify-center gap-6 mt-2">
          <a href="#" className="underline">PRIVACY POLICY</a>
          <a href="#" className="underline">TERMS</a>
          <a href="#" className="underline">FAQ</a>
        </div>
      </div>

   
    </footer>
  );
}