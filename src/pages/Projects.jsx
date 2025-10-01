import Slider from "./Slider";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { useState, useEffect } from "react";

const projectData = [
  {
    id: "project",
    title: "SUPERNOVA",
    locationText: "SECTOR-94, NOIDA",
    thumbnail: "https://big.dk/wp-content/uploads/2022/06/19035_N142_hero1.jpg",
    image: "https://big.dk/wp-content/uploads/2022/06/19035_N142_hero1.jpg",
  },
  {
    id: "project2",
    title: "BOULEVARD WALK",
    locationText: "G.NOIDA(W)",
    thumbnail:
      "https://www.modarchindia.com/assets/frontend/project-thumbnails/Picture1%20(1).webp",
    image:
      "https://www.modarchindia.com/assets/frontend/project-images/Picture1.webp",
  },
  {
    id: "project3",
    title: "BOULEVARD WALK",
    locationText: "G.NOIDA(W)",
    thumbnail:
      "https://www.modarchindia.com/assets/frontend/project-thumbnails/Picture1%20(1).webp",
    image:
      "https://www.modarchindia.com/assets/frontend/project-images/Picture1.webp",
  },
  {
    id: "project4",
    title: "BOULEVARD WALK",
    locationText: "G.NOIDA(W)",
    thumbnail:
      "https://www.modarchindia.com/assets/frontend/project-thumbnails/Picture1%20(1).webp",
    image:
      "https://www.modarchindia.com/assets/frontend/project-images/Picture1.webp",
  },
  {
    id: "project5",
    title: "BOULEVARD WALK",
    locationText: "G.NOIDA(W)",
    thumbnail:
      "https://www.modarchindia.com/assets/frontend/project-thumbnails/Picture1%20(1).webp",
    image:
      "https://www.modarchindia.com/assets/frontend/project-images/Picture1.webp",
  },
  {
    id: "project6",
    title: "BOULEVARD WALK",
    locationText: "G.NOIDA(W)",
    thumbnail:
      "https://www.modarchindia.com/assets/frontend/project-thumbnails/Picture1%20(1).webp",
    image:
      "https://www.modarchindia.com/assets/frontend/project-images/Picture1.webp",
  },
  {
    id: "project7",
    title: "BOULEVARD WALK",
    locationText: "G.NOIDA(W)",
    thumbnail:
      "https://www.modarchindia.com/assets/frontend/project-thumbnails/Picture1%20(1).webp",
    image:
      "https://www.modarchindia.com/assets/frontend/project-images/Picture1.webp",
  },
  {
    id: "project8",
    title: "BOULEVARD WALK",
    locationText: "G.NOIDA(W)",
    thumbnail:
      "https://www.modarchindia.com/assets/frontend/project-thumbnails/Picture1%20(1).webp",
    image:
      "https://www.modarchindia.com/assets/frontend/project-images/Picture1.webp",
  },
  {
    id: "project9",
    title: "BOULEVARD WALK",
    locationText: "G.NOIDA(W)",
    thumbnail:
      "https://www.modarchindia.com/assets/frontend/project-thumbnails/Picture1%20(1).webp",
    image:
      "https://www.modarchindia.com/assets/frontend/project-images/Picture1.webp",
  },
  {
    id: "project10",
    title: "BOULEVARD WALK",
    locationText: "G.NOIDA(W)",
    thumbnail:
      "https://www.modarchindia.com/assets/frontend/project-thumbnails/Picture1%20(1).webp",
    image:
      "https://www.modarchindia.com/assets/frontend/project-images/Picture1.webp",
  },
  {
    id: "project11",
    title: "BOULEVARD WALK",
    locationText: "G.NOIDA(W)",
    thumbnail:
      "https://www.modarchindia.com/assets/frontend/project-thumbnails/Picture1%20(1).webp",
    image:
      "https://www.modarchindia.com/assets/frontend/project-images/Picture1.webp",
  },
  {
    id: "project12",
    title: "BOULEVARD WALK",
    locationText: "G.NOIDA(W)",
    thumbnail:
      "https://www.modarchindia.com/assets/frontend/project-thumbnails/Picture1%20(1).webp",
    image:
      "https://www.modarchindia.com/assets/frontend/project-images/Picture1.webp",
  },
  {
    id: "project13",
    title: "BOULEVARD WALK",
    locationText: "G.NOIDA(W)",
    thumbnail:
      "https://www.modarchindia.com/assets/frontend/project-thumbnails/Picture1%20(1).webp",
    image:
      "https://www.modarchindia.com/assets/frontend/project-images/Picture1.webp",
  },
  {
    id: "project14",
    title: "BOULEVARD WALK",
    locationText: "G.NOIDA(W)",
    thumbnail:
      "https://www.modarchindia.com/assets/frontend/project-thumbnails/Picture1%20(1).webp",
    image:
      "https://www.modarchindia.com/assets/frontend/project-images/Picture1.webp",
  },
  {
    id: "project14",
    title: "BOULEVARD WALK",
    locationText: "G.NOIDA(W)",
    thumbnail:
      "https://www.modarchindia.com/assets/frontend/project-thumbnails/Picture1%20(1).webp",
    image:
      "https://www.modarchindia.com/assets/frontend/project-images/Picture1.webp",
  },
  {
    id: "project14",
    title: "BOULEVARD WALK",
    locationText: "G.NOIDA(W)",
    thumbnail:
      "https://www.modarchindia.com/assets/frontend/project-thumbnails/Picture1%20(1).webp",
    image:
      "https://www.modarchindia.com/assets/frontend/project-images/Picture1.webp",
  },
  {
    id: "project14",
    title: "BOULEVARD WALK",
    locationText: "G.NOIDA(W)",
    thumbnail:
      "https://www.modarchindia.com/assets/frontend/project-thumbnails/Picture1%20(1).webp",
    image:
      "https://www.modarchindia.com/assets/frontend/project-images/Picture1.webp",
  },
  {
    id: "project14",
    title: "BOULEVARD WALK",
    locationText: "G.NOIDA(W)",
    thumbnail:
      "https://www.modarchindia.com/assets/frontend/project-thumbnails/Picture1%20(1).webp",
    image:
      "https://www.modarchindia.com/assets/frontend/project-images/Picture1.webp",
  },
  {
    id: "project14",
    title: "BOULEVARD WALK",
    locationText: "G.NOIDA(W)",
    thumbnail:
      "https://www.modarchindia.com/assets/frontend/project-thumbnails/Picture1%20(1).webp",
    image:
      "https://www.modarchindia.com/assets/frontend/project-images/Picture1.webp",
  },
  {
    id: "project14",
    title: "BOULEVARD WALK",
    locationText: "G.NOIDA(W)",
    thumbnail:
      "https://www.modarchindia.com/assets/frontend/project-thumbnails/Picture1%20(1).webp",
    image:
      "https://www.modarchindia.com/assets/frontend/project-images/Picture1.webp",
  },
  {
    id: "project14",
    title: "BOULEVARD WALK",
    locationText: "G.NOIDA(W)",
    thumbnail:
      "https://www.modarchindia.com/assets/frontend/project-thumbnails/Picture1%20(1).webp",
    image:
      "https://www.modarchindia.com/assets/frontend/project-images/Picture1.webp",
  },
  {
    id: "project14",
    title: "BOULEVARD WALK",
    locationText: "G.NOIDA(W)",
    thumbnail:
      "https://www.modarchindia.com/assets/frontend/project-thumbnails/Picture1%20(1).webp",
    image:
      "https://www.modarchindia.com/assets/frontend/project-images/Picture1.webp",
  },
  {
    id: "project14",
    title: "BOULEVARD WALK",
    locationText: "G.NOIDA(W)",
    thumbnail:
      "https://www.modarchindia.com/assets/frontend/project-thumbnails/Picture1%20(1).webp",
    image:
      "https://www.modarchindia.com/assets/frontend/project-images/Picture1.webp",
  },
  {
    id: "project14",
    title: "BOULEVARD WALK",
    locationText: "G.NOIDA(W)",
    thumbnail:
      "https://www.modarchindia.com/assets/frontend/project-thumbnails/Picture1%20(1).webp",
    image:
      "https://www.modarchindia.com/assets/frontend/project-images/Picture1.webp",
  },
  {
    id: "project14",
    title: "BOULEVARD WALK",
    locationText: "G.NOIDA(W)",
    thumbnail:
      "https://www.modarchindia.com/assets/frontend/project-thumbnails/Picture1%20(1).webp",
    image:
      "https://www.modarchindia.com/assets/frontend/project-images/Picture1.webp",
  },
  {
    id: "project14",
    title: "BOULEVARD WALK",
    locationText: "G.NOIDA(W)",
    thumbnail:
      "https://www.modarchindia.com/assets/frontend/project-thumbnails/Picture1%20(1).webp",
    image:
      "https://www.modarchindia.com/assets/frontend/project-images/Picture1.webp",
  },
  {
    id: "project14",
    title: "BOULEVARD WALK",
    locationText: "G.NOIDA(W)",
    thumbnail:
      "https://www.modarchindia.com/assets/frontend/project-thumbnails/Picture1%20(1).webp",
    image:
      "https://www.modarchindia.com/assets/frontend/project-images/Picture1.webp",
  },
  {
    id: "project14",
    title: "BOULEVARD WALK",
    locationText: "G.NOIDA(W)",
    thumbnail:
      "https://www.modarchindia.com/assets/frontend/project-thumbnails/Picture1%20(1).webp",
    image:
      "https://www.modarchindia.com/assets/frontend/project-images/Picture1.webp",
  },
];

const Projects = () => {
  const [activeId, setActiveId] = useState(null);
  const [previousIds, setPreviousIds] = useState([]);
  const [isScrolling, setIsScrolling] = useState(false);
  
  const scale = useMotionValue(1);
  const smoothScale = useSpring(scale, { stiffness: 300, damping: 30 });

  useEffect(() => {
    let scrollTimeout;

    const handleScroll = () => {
      // User is scrolling - zoom in
      setIsScrolling(true);
      scale.set(0.95);

      // Clear previous timeout
      clearTimeout(scrollTimeout);

      // Set timeout to detect when scrolling stops
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
        scale.set(1);
      }, 150); // Adjust this value for sensitivity
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [scale]);

  const handleClick = (projectId) => {
    if (projectId !== activeId) {
      if (activeId) {
        console.log('test1');
        setPreviousIds((prev) =>
          prev.includes(activeId) ? prev : [...prev, activeId]
        );
      }
      setActiveId(projectId);
      window.history.pushState({}, "", `/modarchnew/${projectId}`);
    } else {
      setActiveId(projectId);
      window.history.pushState({}, "", `/modarchnew/${projectId}`);
    }
  };

  return (
    <section className="projects pt-0">
      <div className="container-fluid">
        <AnimatePresence>
          <motion.div
            style={{ scale: smoothScale }}
            className="row"
          >
            {projectData.map(({ id, title, locationText, thumbnail, image }) => {
              const isActive = activeId === id;
              const isPrevious = previousIds.includes(id);

              if (isActive) {
                return (
                  <motion.div
                    key={id}
                    initial={{ opacity: 0.8, scale: 1 }}
                    animate={{ opacity: 1, scale: 1.6 }}
                    transition={{ duration: 0.5 }}
                    className="mt-4 p-6 bg-green-200 rounded-lg"
                    style={{ transformOrigin: "top" }}
                  >
                    <Slider
                      projectId={id}
                      onClick={() => handleClick(id)}
                      carouselMargin={220}
                      opacity={1}
                      fontSize={"10px"}
                      drag={"x"}
                    />
                  </motion.div>
                );
              }

              if (isPrevious) {
                return (
                  <motion.div
                    key={id}
                    initial={{ scale: 1 }}
                    animate={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="mt-4 p-6 bg-yellow-200 rounded-lg"
                    style={{ transformOrigin: "top" }}
                    onClick={() => handleClick(id)}
                  >
                    <Slider
                      projectId={id}
                      carouselMargin={50}
                      opacity={0}
                      fontSize={"12px"}
                      drag={"x"}
                    />
                  </motion.div>
                );
              }

              return (
                <div className="pb-4 project" key={id}>
                  <div className="smallImage">
                    <div className="project_box">
                      <img src={thumbnail} alt={title} />
                      <h3>{title}</h3>
                      <p>{locationText}</p>
                    </div>
                  </div>
                  <div className="project_img">
                    <img src={image} alt={title} onClick={() => handleClick(id)} />
                  </div>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;