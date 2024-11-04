"use client";
import { useScroll, motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const navMenuVariants = {
  open: {
    opacity: 1,
    width: 200,
    height: 400,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  closed: {
    opacity: 0,
    width: 0,
    height: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

export default function Nav({ jobCount }: { jobCount: number }) {
  const { scrollY } = useScroll();
  const [showHamburger, setShowHamburger] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const updateHamburgerVisibility = () => {
      const isSmallScreen = window.innerWidth < 768;
      setShowHamburger(isSmallScreen || scrollY.get() > window.innerHeight);
    };

    // Run once on component mount
    updateHamburgerVisibility();

    window.addEventListener("resize", updateHamburgerVisibility);

    return () => {
      window.removeEventListener("resize", updateHamburgerVisibility);
    };
  }, [scrollY]);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      if (window.innerWidth >= 768) {
        setShowHamburger(latest > window.innerHeight);
      }
    });
  }, [scrollY]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleClickOutside = (event: MouseEvent | TouchEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    document.addEventListener("scroll", () => setIsMenuOpen(false));
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
      document.removeEventListener("scroll", () => setIsMenuOpen(false));
    };
  }, []);

  return (
    <motion.nav
      animate={{
        x: showHamburger ? window.innerWidth / 2 - 80 : 0,
        y: showHamburger ? -100 : 0,
        scale: showHamburger ? 0.8 : 1,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{
        transition: "width 0.3s ease",
      }}
      className="flex fixed top-32 items-center justify-center bg-white/20 border border-white/10 backdrop-blur-md shadow-lg w-fit h-16 px-6 rounded-full text-white z-[999]"
    >
      <AnimatePresence mode="wait">
        {!showHamburger ? (
          <motion.div
            key="links"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="hidden md:flex items-center space-x-4"
          >
            <a
              href="https://docs.ragas.io/"
              target="_blank"
              className="bg-black text-white font-semibold px-4 py-1 rounded-lg border border-white/20"
            >
              Docs
            </a>
            <a
              href="https://blog.ragas.io/"
              target="_blank"
              className="hover:text-gray-300 relative font-semibold"
            >
              Blog
            </a>
            <a
              href="http://github.com/explodinggradients/ragas"
              target="__blank"
              className="hover:text-gray-300 relative font-semibold"
            >
              Github
            </a>
            <a
              href="https://discord.gg/5qGUJ6mh7C"
              target="__blank"
              className="hover:text-gray-300 relative font-semibold"
            >
              Community
            </a>
            <Link
              href="/careers"
              className="hover:text-gray-300 relative font-semibold pr-2"
            >
              Careers
              <span className="text-xs text-center absolute -top-3 -right-0 bg-black text-yellow-400 p-1 w-[20px] h-[20px] aspect-square m-0 rounded-full">
                {jobCount}
              </span>
            </Link>
            <a
              href="/contact"
              className="bg-yellow-400 text-black font-semibold px-4 py-1 rounded-lg hover:bg-yellow-300"
            >
              Contact Us
            </a>
          </motion.div>
        ) : (
          <motion.div
            key="hamburger"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            onClick={toggleMenu}
            className="flex flex-col items-center justify-center space-y-1 cursor-pointer relative"
          >
            <div className="w-6 h-0.5 bg-white rounded"></div>
            <div className="w-6 h-0.5 bg-white rounded"></div>
            <div className="w-6 h-0.5 bg-white rounded"></div>
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  ref={menuRef}
                  variants={navMenuVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  className="absolute -top-10 -right-10 bg-black border border-white/10 rounded-lg p-6 w-64 overflow-hidden"
                >
                  <ul className="flex flex-col space-y-4 text-white">
                    <li>
                      <a
                        href="https://docs.ragas.io/"
                        target="_blank"
                        className="bg-black text-white font-semibold px-4 py-1 rounded-lg border border-white/20"
                      >
                        Docs
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://blog.ragas.io/"
                        target="_blank"
                        className="hover:text-gray-300 font-semibold"
                      >
                        Blog
                      </a>
                    </li>
                    <li>
                      <a
                        href="http://github.com/explodinggradients/ragas"
                        target="_blank"
                        className="hover:text-gray-300 font-semibold"
                      >
                        Github
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://discord.gg/5qGUJ6mh7C"
                        target="_blank"
                        className="hover:text-gray-300 font-semibold"
                      >
                        Community
                      </a>
                    </li>
                    <li>
                      <Link
                        href="/careers"
                        className="hover:text-gray-300 font-semibold"
                      >
                        Careers
                        <span className="text-xs bg-red-600 text-white ml-2 p-1 rounded-full">
                          {jobCount}
                        </span>
                      </Link>
                    </li>
                    <li>
                      <a
                        href="/contact"
                        className="bg-yellow-400 text-black font-semibold px-4 py-1 rounded-lg hover:bg-yellow-300"
                      >
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
