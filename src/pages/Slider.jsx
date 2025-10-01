import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projectImageSets = {
  project: [
    {
      src: "https://big.dk/wp-content/uploads/2022/06/19035_N142_hero1.jpg",
      title: "SUPERNOVA",
      subtitle: "SECTOR-94, NOIDA",
    },
    {
      src: "https://big.dk/wp-content/uploads/2022/06/19035_N142_hero1.jpg",
    },
    {
      src: "",
      title: "",
      subtitle: "",
      description: `Being famed as North India’s tallest mixed-use development, Supernova covers an incredible 7.5 million square feet area. This pioneering, gold-rated LEED-certified development has given equal attention to its four different uses – office, residential, hospitality, and retail by featuring five towers: Spira, Astralis, Aurora, Nova East & Nova West, and the Radiance Place. This luxurious self-sustained township is designed for the future, where automation meets ultra-luxury. The architecture is powerful, pure, and dynamic, maximizing opportunities and viabilities within the site’s context.`,
    },
    { src: "https://www.modarchindia.com/assets/frontend/project-other-images/14027333481_1600_900.webp" },
    { src: "https://www.modarchindia.com/assets/frontend/project-other-images/14027334752_1600_900.webp" },
    { src: "https://www.modarchindia.com/assets/frontend/project-other-images/14027336173_1600_900.webp" },
    { src: "https://www.modarchindia.com/assets/frontend/project-other-images/14027338904_1600_900.webp" },
    { src: "https://www.modarchindia.com/assets/frontend/project-other-images/14027377096_1600_900.webp" },
    { src: "https://www.modarchindia.com/assets/frontend/project-other-images/14027381509_1600_900.webp" },
  ],
  project2: [
    {
      src: "https://www.modarchindia.com/assets/frontend/project-thumbnails/Picture1%20(1).webp",
      title: "BOULEVARD WALK",
      subtitle: "G.NOIDA(W)",
    },
    {
      src: "https://www.modarchindia.com/assets/frontend/project-images/Picture1.webp",
    },
    {
      src: "",
      title: "",
      subtitle: "",
      description: "Boulevard Walk is a high-end mixed-use commercial project in Greater Noida (West) featuring retail, entertainment and office spaces.",
    },
    { src: "https://www.modarchindia.com/assets/frontend/project-other-images/14027333481_1600_900.webp" },
    { src: "https://www.modarchindia.com/assets/frontend/project-other-images/14027334752_1600_900.webp" },
    { src: "https://www.modarchindia.com/assets/frontend/project-other-images/14027336173_1600_900.webp" },
    { src: "https://www.modarchindia.com/assets/frontend/project-other-images/14027338904_1600_900.webp" },
    { src: "https://www.modarchindia.com/assets/frontend/project-other-images/14027377096_1600_900.webp" },
    { src: "https://www.modarchindia.com/assets/frontend/project-other-images/14027381509_1600_900.webp" },
  ],
  project3: [
    {
      src: "https://www.modarchindia.com/assets/frontend/project-thumbnails/Picture1%20(1).webp",
      title: "BOULEVARD WALK",
      subtitle: "G.NOIDA(W)",
    },
    {
      src: "https://www.modarchindia.com/assets/frontend/project-images/Picture1.webp",
    },
    {
      src: "",
      title: "",
      subtitle: "",
      description: "Boulevard Walk is a high-end mixed-use commercial project in Greater Noida (West) featuring retail, entertainment and office spaces.",
    },
    { src: "https://www.modarchindia.com/assets/frontend/project-other-images/14027333481_1600_900.webp" },
    { src: "https://www.modarchindia.com/assets/frontend/project-other-images/14027334752_1600_900.webp" },
    { src: "https://www.modarchindia.com/assets/frontend/project-other-images/14027336173_1600_900.webp" },
    { src: "https://www.modarchindia.com/assets/frontend/project-other-images/14027338904_1600_900.webp" },
    { src: "https://www.modarchindia.com/assets/frontend/project-other-images/14027377096_1600_900.webp" },
    { src: "https://www.modarchindia.com/assets/frontend/project-other-images/14027381509_1600_900.webp" },
  ],
};
export default function MotionSlider({ projectId, carouselMargin, fontSize, opacity, drag }) {
  const images = projectImageSets[projectId] || [];
  const carouselRef = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const scrollWidth = carouselRef.current.scrollWidth;
    const offsetWidth = carouselRef.current.offsetWidth;
    setWidth(scrollWidth - offsetWidth);
  }, [images]);
  return (
    <>
      <div className="p-0">
        <motion.div
          ref={carouselRef}
          initial={{marginBottom:40}}
          animate={{ marginBottom:carouselMargin }}
          transition={{ duration: 0.5 }}
          whileTap={{ cursor: "grabbing" }}
        >
          <AnimatePresence>
          <motion.div
            className="inner-carousel mb-5 d-flex"
            drag={drag}
            dragConstraints={{ right: 0, left: -width }}
          >
            {images.map((item, index) => {
              const isIntro = item.title || item.description;
              return (
                <motion.div
                  key={index}
                  className={`item`}
                  style={{'width': '25%'}}
                >
                  {isIntro ? (
                    <div className="project_box">
                      {item.src && (
                          <motion.img
                            src={item.src}
                            alt={item.title || `slide-${index}`}
                            style={{ cursor: "zoom-in" }}
                            className="img-fluid rounded mb-2"
                          />
                      )}
                      {item.title && <h3 style={{fontSize: fontSize}}>{item.title}</h3>}
                      {item.subtitle && <p style={{fontSize: fontSize}}>{item.subtitle}</p>}
                      {item.title && (
                      <motion.div
                        className="details"
                        initial={{ opacity: opacity}}   // start below, hidden
                        animate={{ opacity: opacity}}    // move up to normal
                        transition={{ duration: 0.8,  ease: "easeOut" }}
                      >
                        <p className="head">Service</p>
                        <p className="head2">Architecture</p>
                        <p className="head">Client</p>
                        <p className="head2">SUPERTECH LTD.</p>
                        <p className="head">Site Area</p>
                        <p className="head2">70002 SQ. MT.</p>
                        <p className="head">Built-up</p>
                        <p className="head2">70000 SQ. MT.</p>
                        <p className="head">Status</p>
                        <p className="head2">Development</p>
                      </motion.div>
                      )}
                      {item.description && (
                        <motion.p
                          className="text-black description"
                          initial={{ opacity: 0}}   // start below, hidden
                          animate={{ opacity: 1}}    // move up to normal
                          transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
                          dangerouslySetInnerHTML={{ __html: item.description }}
                          style={{fontSize: fontSize}}
                        />
                      )}
                    </div>
                  ) : (
                    item.src && (
                      <motion.img
                        src={item.src}
                        alt={`slide-${index}`}
                        className="img-fluid rounded shadow-sm"
                      />
                    )
                  )}
                </motion.div>
              );
            })}
          </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </>
  );
}
