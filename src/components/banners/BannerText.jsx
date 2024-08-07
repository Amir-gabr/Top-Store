//
//
//
//

import { motion } from "framer-motion";

export default function BannerText({title}) {
  return (
    <div className="absolute inline-block top-16 md:top-40 left-5  md:left-20 w-full h-full">
      <div className="container space-y-2 md:space-y-4">
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-xl md:text-5xl lg:text-7xl font-bold text-white"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-[10px] md:text-base lg:text-lg text-slate-100"
        >
          Stock up on sportswear and limited
          <br /> edition collections on our <br />
          awesome mid-season sale.
        </motion.p>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="flex gap-x-2 mt-2"
        >
          <button className="py-1 px-2 md:py-3 md:px-6 rounded-full bg-slate-200 hover:bg-white duration-200 text-[10px] md:text-sm uppercase font-semibold">
            Find out more
          </button>
          <button className="py-1 px-2 md:py-3 md:px-6 rounded-full bg-slate-200 hover:bg-white duration-200 text-[10px] md:text-sm uppercase font-semibold">
            Shop Now
          </button>
        </motion.div>
      </div>
    </div>
  );
}


