
const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">
            Mysuru Tourism
          </h2>
          <p className="text-sm leading-relaxed">
            Discover heritage, culture, food, and unforgettable experiences
            in the royal city of Mysuru.
          </p>
        </div>

        {/* Explore */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Explore
          </h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition">Destinations</a></li>
            <li><a href="#" className="hover:text-white transition">Attractions</a></li>
            <li><a href="#" className="hover:text-white transition">Events</a></li>
            <li><a href="#" className="hover:text-white transition">Travel Guide</a></li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Useful Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition">About Us</a></li>
            <li><a href="#" className="hover:text-white transition">Contact</a></li>
            <li><a href="#" className="hover:text-white transition">FAQs</a></li>
            <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Contact
          </h3>
          <p className="text-sm mb-2">📍 Mysuru, Karnataka</p>
          <p className="text-sm mb-2">📧 info@mysurutourism.com</p>
          <p className="text-sm mb-4">📞 +91 98765 43210</p>

          <div className="flex space-x-4 text-xl">
            <a href="#" className="hover:text-white transition">🌐</a>
            <a href="#" className="hover:text-white transition">📸</a>
            <a href="#" className="hover:text-white transition">🐦</a>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-700 text-center py-4 text-sm text-gray-400">
        © 2025 Mysuru Tourism. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
