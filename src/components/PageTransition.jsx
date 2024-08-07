//
//
import { motion } from "framer-motion";
// import toTop from "../assets/images/toTop.svg";
export default function PageTransition({ children }) {
  return (
    <>
      {children}

      <motion.div
        className="bg-purple-200 fixed top-0 left-0 w-full h-full origin-bottom z-40"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />

      <motion.div
        className="bg-purple-600 fixed top-0 left-0 w-full h-full origin-top z-40"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* <motion.div
          initial={{ x: "-100vw" }}
          animate={{ x: "100vw" }}
          transition={{ duration: 2 }}
          className="relative z-50 w-40 h-40"
          >
        </motion.div> */}

      {/* //cart */}
      {/* <motion.div
        className="flex justify-center items-center fixed top-0 left-0 w-screen h-screen origin-right z-[1000]"
        initial={{ y: "0vh" }}
        animate={{ y: "-100vh" }}
        transition={{ duration: 1 }}
      >
        <Lottie animationData={cartAnimation} className="w-40"></Lottie>
        <img src={toTop} alt="" className="w-full h-full  " />
      </motion.div> */}
    </>
  );
}
