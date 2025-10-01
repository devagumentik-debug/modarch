import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Preloader = () => {
  const [slidePreloader, setSlidePreloader] = useState(false);
  const [showMainContent, setShowMainContent] = useState(false);

  useEffect(() => {
    const slideTimer = setTimeout(() => {
      setSlidePreloader(true);

      const mainContentTimer = setTimeout(() => {
        setShowMainContent(true);
      }, 2000); // match the slide-up animation time

      return () => clearTimeout(mainContentTimer);
    }, 4500); // wait for letter animation

    return () => clearTimeout(slideTimer);
  }, []);

  return (
    <AnimatePresence>
      {!showMainContent && (
        <motion.div
          key="preloader-bg"
          className="preloader-bg"
          initial={{ y: 0 }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
            delay: 0, // starts moving when text is ~60-70% done
          }}
        >
          <div id="preloader">
            <div
              id="letter-box"
              className={`letter-container ${slidePreloader ? "slide-preloader" : ""}`}
            >
              <span className="letter">
                <img
                  src="https://www.modarchindia.com/assets/frontend/images/modarchindia/logo-green.png"
                  alt="logo"
                />
              </span>
              {"MODARCHINDIA".split("").map((char, i) => (
                <span className="letter" key={i}>
                  {char}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
