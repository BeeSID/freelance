import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import mainLogo from "../assets/main.svg";

const navItems = [
  { name: "முகப்பு", link: "/" },
  {
    name: "நிர்வாகம்",
    dropdown: true,
    subItems: [
      { name: "மாநில நிர்வாகம்", link: "/nirvagam" },
      { name: "மாவட்ட நிர்வாகம்", link: "/mavattanirvagam" },
      { name: "அணிகள்", link: "#" }, // maybe replace with a real path or keep as '#'
    ],
  },
  {
    name: "சேவை நிறுவனங்கள்",
    dropdown: true,
    subItems: [
      { name: "Sub Item A", link: "#" },
      { name: "Sub Item B", link: "#" },
    ],
  },
  { name: "பைலா", link: "/bylaw" }, // note lowercase 'bylaw' to match route
  {
    name: "நிர்வாக நிகழ்வுகள்",
    dropdown: true,
    subItems: [
      { name: "மாநிலச் செயற்குழு", link: "/nirvagam/maanila-seyarkulu" },
      { name: "மாநிலப் பொதுக்குழு", link: "/nirvagam/maanila-podhukulu" },
    ],
  },
  {
    name: "முக்கிய நிகழ்வுகள்",
    dropdown: true,
    subItems: [
      { name: "சமீபத்திய நிகழ்வுகள்", link: "/mukkiya/recent-events" },
      { name: "ஆர்ப்பாட்டங்கள் & போராட்டங்கள்", link: "/mukkiya/aarpatangal-porattangal" },
      { name: "பொதுக்கூட்டங்கள்", link: "/mukkiya/podhukootangal" },
      
    ],
  },
  // {
  //   name: "மணமக்கள் தேவை",
  //   dropdown: true,
  //   subItems: [
  //     { name: "மணமகன் தேவை", link: "#" },
  //     { name: "மணமகள் தேவை", link: "#" },
  //   ],
  // },
  { name: "தொடர்பு", link: "/contact" },
];


const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState({}); // Track open submenus in mobile

  // Toggle individual dropdown in mobile menu
  const toggleDropdown = (name) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      {/* Logo */}
      <div className="flex flex-col items-center py-3">
        <img
          src={mainLogo}
          alt="Organization Logo"
          className="h-20 w-auto object-contain mb-1"
        />
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center justify-center px-8 py-2 border-t">
        <div className="flex space-x-6 text-base font-medium text-black">
          {navItems.map((item) => (
            <div key={item.name} className="relative group">
              {item.dropdown ? (
                <>
                  <button
                    type="button"
                    className="flex items-center gap-1 tiro-tamil-regular font-medium hover:text-blue-600 transition-colors"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {item.name}
                    <ChevronDown size={14} />
                  </button>

                  {/* Hover Dropdown */}
                  <div className="absolute left-0 mt-2 w-48 bg-[#2563eb] text-white rounded-md shadow-md opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 origin-top z-20">
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.link}
                        className="block px-4 py-2 hover:bg-[#3b82f6] rounded-md transition-colors duration-150 tiro-tamil-regular"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  to={item.link}
                  className="tiro-tamil-regular font-medium hover:text-blue-600 transition-colors"
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </div>
      </nav>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden px-4 py-2 flex justify-between items-center border-t">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="md:hidden bg-white border-t px-4 pb-4 space-y-2 text-base font-medium text-black">
          {navItems.map((item) => (
            <div key={item.name}>
              <button
                type="button"
                onClick={() => item.dropdown && toggleDropdown(item.name)}
                className="w-full text-left flex items-center justify-between py-2 tiro-tamil-regular font-medium hover:text-blue-600"
                aria-haspopup={item.dropdown ? "true" : undefined}
                aria-expanded={openDropdowns[item.name] || false}
              >
                <span>{item.name}</span>
                {item.dropdown && <ChevronDown size={14} />}
              </button>

              {item.dropdown && openDropdowns[item.name] && (
                <ul className="pl-5 mt-1 space-y-1 bg-[#2563eb] rounded-md">
                  {item.subItems.map((subItem) => (
                    <li key={subItem.name}>
                      <Link
                        to={subItem.link}
                        className="block py-2 px-4 text-white hover:bg-[#3b82f6] rounded-md transition-colors duration-150 tiro-tamil-regular"
                        onClick={() => setMenuOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
              {!item.dropdown && (
                <Link
                  to={item.link}
                  className="block py-2 tiro-tamil-regular font-medium hover:text-blue-600"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </nav>
      )}
    </header>
  );
};

export default NavBar;
