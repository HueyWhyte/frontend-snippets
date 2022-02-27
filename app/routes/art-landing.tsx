import { useState } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiArrowLeftCircle, FiTag } from "react-icons/fi";
import cyber from "../assets/img/cyber_girl.png";
import gun from "../assets/img/cyber_gun.png";
import sword from "../assets/img/cyber_sword.png";

const ArtLanding = () => {
  const [isItem, seItem] = useState(false);

  return (
    <>
      <nav className="flex w-full h-16 fixed text-white font-serif font-artwork text-xl bg-transparent">
        <div className="flex-1 flex items-center pl-6">
          <img
            src="https://www.freepnglogos.com/uploads/-d-logo-png-5.png"
            alt=""
            className="h-10  ml-14 bg-pink-200 p-2 rounded-full"
          />
        </div>

        <div className="flex-1 flex justify-between items-center">
          <a href="dsa">Marketplace</a>
          <a href="dsa">Stats</a>
          <a href="dsa">Resources</a>
          <a href="dsa">Create</a>
        </div>

        <div className="flex-1 flex justify-end items-center pr-10">
          <FiMenu size={30} />
        </div>
      </nav>

      <div className="artwork-container h-screen w-full text-white font-artwork flex flex-col justify-center items-center overflow-hidden">
        <motion.h1
          initial={{ x: -300 }}
          animate={{ x: 0 }}
          transition={{
            duration: 1,
            type: "spring",
            bounce: 0.35,
          }}
          className="text-4xl md:text-9xl w-4/5 mx-auto my-auto text-center z-40 mt-24 p-0 "
        >
          COLLECT SUPER
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 2,
          }}
          className="text-4xl md:text-9xl w-4/5 mx-auto my-auto text-center z-40 m-0 p-0"
        >
          RARE DIGITAL
        </motion.h1>

        <motion.h1
          initial={{ x: 300 }}
          animate={{ x: 0 }}
          transition={{
            duration: 1,
            type: "spring",
            bounce: 0.35,
          }}
          className="text-4xl md:text-9xl w-4/5 mx-auto my-auto text-center z-40 m-0 p-0"
        >
          ARTWORK
        </motion.h1>

        <motion.div
          initial={{ rotate: -3 }}
          whileHover={{
            zIndex: 50,
            backdropFilter: "blur(10px)",
            rotate: 0,
          }}
          whileTap={() => seItem(true)}
          transition={{ duration: 0.4 }}
          className="glass h-[60%] w-[25%] -mt-56 mb-8 flex cursor-pointer"
        >
          <img src={cyber} alt="" className="h-5/6 mt-auto mx-auto" />
        </motion.div>
      </div>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: isItem ? 1 : 0 }}
        transition={{ duration: 0.5, type: "spring", bounce: 0.35 }}
        className="tglass fixed h-screen w-screen flex text-pink-200 font-artwork"
        style={{
          left: 0,
          right: 0,
          zIndex: 300,
        }}
      >
        <motion.div whileTap={() => seItem(false)} className="fixed m-5">
          <FiArrowLeftCircle size={50} color="pink" />
        </motion.div>

        <div className="flex-1 flex flex-col justify-center p-4">
          <h1 className="text-9xl text-right">Cyber Girl</h1>

          <p className="text-xl text-right mt-10">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet ad
            corrupti nam vel, doloribus nulla dolor quasi iusto pariatur sequi
            dolore est.
          </p>
        </div>

        <img src={cyber} alt="" className="h-[89%] mt-auto mx-auto" />

        <div className="flex-1 flex flex-col justify-center">
          <h1 className="text-6xl mb-10">Weapons</h1>

          <div className="flex my-10">
            <img src={sword} alt="" className="h-52 mt-auto mx-auto" />

            <img src={gun} alt="" className="h-48 mt-auto mx-auto" />
          </div>

          <motion.p
            whileHover={{ scale: 1.1 }}
            className="flex text-pink-200 bg-pink-600 shadow-xl mx-auto px-5 py-4 rounded-xl border-2 border-pink-900 border-solid cursor-pointer mt-10"
          >
            <FiTag size={25} className="mr-3" />
            MAKE OFFER
          </motion.p>
        </div>
      </motion.div>
    </>
  );
};

export default ArtLanding;
