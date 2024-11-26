import { useEffect, useState } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";

import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

const routes = ["Home", "About us", "Roadmap", "FAQs", "Contact Us"];

function Navbar() {
  const { scroll } = useLocomotiveScroll();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (!scroll) return;

    scroll.on("scroll", (instance: { scroll: { y: number } }) => {
      setIsScrolled(instance.scroll.y > 250);
    });

    return () => {
      scroll.destroy();
    };
  }, [scroll]);

  const toggleMenu = () => {
    setIsScrolled(!isMenuOpen);
    setIsMenuOpen(!isMenuOpen);
  };

  const menuVariants = {
    open: {
      height: "50vh",
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.6,
        ease: "easeInOut",
      },
    },
    closed: {
      height: 0,
      opacity: 0,
      transition: {
        type: "tween",
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <header
        className={clsx(
          "fixed w-full max-w-[100vw] h-[10vh] px-4 md:px-14 xl:px-20 py-3 md:py-8 flex justify-between items-center z-50 transition-colors duration-300",
          { "bg-white/5 backdrop-blur-lg": isScrolled }
        )}
      >
        <div className="flex-none flex gap-3">
          <img src="/logo.svg" alt="Logo" className="max-h-12 w-auto" />
          <img
            src="/letterwork.svg"
            alt="Letterwork"
            className="max-h-12 w-auto hidden sm:block"
          />
        </div>
        <nav className="hidden md:block">
          <ul className="list-none flex gap-6 lg:gap-14 *:text-sm *:font-semibold">
            {routes.map((item, index) => (
              <motion.li key={index} variants={itemVariants}>
                <a href="#" className={clsx("", { active: index == 0 })}>
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>
        <div className="flex-none hidden md:block">
          <Button>Connect wallet</Button>
        </div>
        <Button variant="outline" onClick={toggleMenu} className="md:hidden">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </header>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed top-[10vh] w-full overflow-hidden z-50"
          >
            <div className="w-full h-[50vh] bg-white/5 backdrop-blur-lg p-4 flex flex-col justify-between md:hidden">
              <motion.nav
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="flex flex-col gap-4"
              >
                {routes.map((item, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    variants={itemVariants}
                    className={clsx("text-base font-semibold", {
                      active: index == 0,
                    })}
                  >
                    {item}
                  </motion.a>
                ))}
              </motion.nav>
              <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={itemVariants}
                className="mt-4"
              >
                <Button className="w-full">Connect wallet</Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
