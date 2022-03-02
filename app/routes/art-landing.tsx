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
      <nav className="font-artwork fixed flex h-16 w-full bg-transparent font-serif text-xl text-white">
        <div className="flex flex-1 items-center pl-6">
          <img
            src="https://www.freepnglogos.com/uploads/-d-logo-png-5.png"
            alt=""
            className="ml-14  h-10 rounded-full bg-pink-200 p-2"
          />
        </div>

        <div className="flex flex-1 items-center justify-between">
          <a href="dsa">Marketplace</a>
          <a href="dsa">Stats</a>
          <a href="dsa">Resources</a>
          <a href="dsa">Create</a>
        </div>

        <div className="flex flex-1 items-center justify-end pr-10">
          <FiMenu size={30} />
        </div>
      </nav>

      <div className="artwork-container font-artwork flex h-screen w-full flex-col items-center justify-center overflow-hidden text-white">
        <motion.h1
          initial={{ x: -300 }}
          animate={{ x: 0 }}
          transition={{
            duration: 1,
            type: "spring",
            bounce: 0.35,
          }}
          className="z-40 mx-auto my-auto mt-24 w-4/5 p-0 text-center text-4xl md:text-9xl "
        >
          COLLECT SUPER
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 2,
          }}
          className="z-40 m-0 mx-auto my-auto w-4/5 p-0 text-center text-4xl md:text-9xl"
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
          className="z-40 m-0 mx-auto my-auto w-4/5 p-0 text-center text-4xl md:text-9xl"
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
          className="glass -mt-56 mb-8 flex h-[60%] w-[25%] cursor-pointer"
        >
          <img src={cyber} alt="" className="mx-auto mt-auto h-5/6" />
        </motion.div>
      </div>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: isItem ? 1 : 0 }}
        transition={{ duration: 0.5, type: "spring", bounce: 0.35 }}
        className="tglass font-artwork fixed flex h-screen w-screen text-pink-200"
        style={{
          left: 0,
          right: 0,
          zIndex: 300,
        }}
      >
        <motion.div whileTap={() => seItem(false)} className="fixed m-5">
          <FiArrowLeftCircle size={50} color="pink" />
        </motion.div>

        <div className="flex flex-1 flex-col justify-center p-4">
          <h1 className="text-right text-9xl">Cyber Girl</h1>

          <p className="mt-10 text-right text-xl">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet ad
            corrupti nam vel, doloribus nulla dolor quasi iusto pariatur sequi
            dolore est.
          </p>
        </div>

        <img src={cyber} alt="" className="mx-auto mt-auto h-[89%]" />

        <div className="flex flex-1 flex-col justify-center">
          <h1 className="mb-10 text-6xl">Weapons</h1>

          <div className="my-10 flex">
            <img src={sword} alt="" className="mx-auto mt-auto h-52" />

            <img src={gun} alt="" className="mx-auto mt-auto h-48" />
          </div>

          <motion.p
            whileHover={{ scale: 1.1 }}
            className="mx-auto mt-10 flex cursor-pointer rounded-xl border-2 border-solid border-pink-900 bg-pink-600 px-5 py-4 text-pink-200 shadow-xl"
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
