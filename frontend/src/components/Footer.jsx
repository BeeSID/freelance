import React, { useEffect, useRef, useState } from "react";
import { FaLinkedin, FaFacebookF, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const footerRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const currentFooter = footerRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
        }
      },
      { threshold: 0.1 }
    );

    if (currentFooter) observer.observe(currentFooter);

    return () => {
      if (currentFooter) observer.unobserve(currentFooter);
    };
  }, []);

  return (
    <>
      <div className="w-full">
        <div className="h-4 bg-sky-400"></div>
        <div className="h-4 bg-white"></div>
      </div>

      <footer
        ref={footerRef}
        className={`relative bg-black text-gray-300 pt-4 pb-2 px-6
          ${animate ? "animate-fadeInUpBounce" : "opacity-0"}
        `}
      >
        <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">

          {/* Home Link */}
          <div>
            <h2 className="text-sm font-semibold mb-1">Quick Links</h2>
            <nav className="flex flex-col space-y-1">
              <Link to="/" className="hover:text-white transition text-xs">
                Home
              </Link>
            </nav>
          </div>

          {/* Contact Section */}
          <div>
            <h2 className="text-sm font-semibold mb-1">Contact Us</h2>
            <p className="text-xs">
              Email:{" "}
              <a
                href="mailto:utjstudentswing@gmail.com"
                className="hover:text-white underline no-underline"
              >
                UTJ STUDENTSWING
              </a>
            </p>
          </div>

          {/* Social Media Icons */}
          <div>
            <h2 className="text-sm font-semibold mb-1">Follow Us</h2>
            <div className="flex space-x-4 mt-1 text-gray-400">
              <a
                href="https://www.facebook.com/share/16KJvsdWoM/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-blue-600 transition"
              >
                <FaFacebookF size={18} />
              </a>
              <a
                href="https://www.instagram.com/utj_studentswing/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-pink-500 transition"
              >
                <FaInstagram size={18} />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright & dev credit */}
        <div className="mt-6 border-t border-gray-700 pt-2 text-center text-gray-400 text-[10px] flex justify-center items-center space-x-1">
          <span>© {new Date().getFullYear()} UNIVERSAL TOWHEED JAMATH. All rights reserved.</span>
          <span>|</span>
          <a
            href="https://www.linkedin.com/in/mohamed-siddiq-m-154682225/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:text-blue-500 transition text-xs"
            aria-label="LinkedIn Profile"
          >
            Developed by <FaLinkedin className="ml-1 w-3 h-3" />
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
