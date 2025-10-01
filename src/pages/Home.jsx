import Header from "./Header";
import Preloader from "./Preloader";
import Projects from "./Projects";
import { motion, AnimatePresence} from "framer-motion";

const Home = () => {
    return(
        <>
        <AnimatePresence>
        <Preloader />
            <motion.div
                    initial={{ opacity: 0,}}
                    animate={{ opacity: 1}}
                    transition={{ duration: 1, delay:6.5 }}
                  >
                <Header/>
                <Projects/>
            </motion.div>
        </AnimatePresence>
        </>
    )
}
export default Home;