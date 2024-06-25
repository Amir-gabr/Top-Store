//
//
import { motion } from "framer-motion";
import toTop from "../assets/images/toTop.svg";
export default function transition({ children }) {
  return (
    <>
      {children}

      {/* <motion.div
        className="bg-black fixed top-0 left-0 w-full h-full origin-right z-40"
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 0 }}
        transition={{ duration: 4, ease: [0.22, 1, 0.36, 1] }}
      >
      </motion.div> */}
      {/* <motion.div
          initial={{ x: "-100vw" }}
          animate={{ x: "100vw" }}
          transition={{ duration: 2 }}
          className="relative z-50 w-40 h-40"
          >
        </motion.div> */}

      {/* //cart */}
      <motion.div
        className="flex justify-center items-center fixed top-0 left-0 w-screen h-screen origin-right z-[1000]"
        initial={{ y: "0vh" }}
        animate={{ y: "-100vh" }}
        transition={{ duration: 1 }}
      >
        {/* <Lottie animationData={cartAnimation} className="w-40"></Lottie> */}
        <img src={toTop} alt="" className="w-full h-full  " />
      </motion.div>
    </>
  );
}
