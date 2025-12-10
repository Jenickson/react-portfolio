import React from 'react'
import HeroImg from '../assets/Hero1.png'
import { AiOutlineLinkedin, AiOutlineInstagram, AiOutlineGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {

  const config = {
    subtitle1 : 'Im a Python Full-stack developer and designer',
    subtitle2 : 'I build modern web applications',
    subtitle3 : 'Building polished interfaces and reliable backends', 
    social : {
        instagram : 'https://www.instagram.com/_.crazy._.kido._?igsh=MWhkNXB5Y2pqcm80Zg==',
        linkedin : 'https://www.linkedin.com/in/raja-jenickson-107283238/',
        github : 'https://github.com/Jenickson'
    }
  };

  return (
    <section className='flex md:flex-row flex-col px-5 py-36 bg-primary justify-center' id="home">

      {/* LEFT */}
      <div className='md:w-1/2 flex flex-col'>

        {/* NAME ANIMATION */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.4 }}  // 👈 animate on scroll up + down
          className='text-white text-7xl font-hero-font leading-tight'
        >
          Hi,<br /> I'm <span className='text-black'>Raja</span> Jenickson
        </motion.h1>

        {/* TYPE ANIMATION */}
        <TypeAnimation
          sequence={[
            config.subtitle1, 2000,
            config.subtitle2, 2000,
            config.subtitle3, 2000,
          ]}
          speed={40}
          repeat={Infinity}
          className='text-2xl text-white mt-3 font-hero-font'
        />

        {/* SOCIAL ICON ANIMATION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: false, amount: 0.4 }}
          className='flex py-10 space-x-5 text-white '
        >
          <a target='blank' href={config.social.instagram} className='hover:text-[#00b8ff] transition-all hover:scale-110 duration-300'><AiOutlineInstagram size={40}/></a>
          <a target='blank' href={config.social.linkedin} className='hover:text-[#00b8ff] transition-all hover:scale-110 duration-300'><AiOutlineLinkedin size={40}/></a>
          <a target='blank' href={config.social.github} className='hover:text-[#00b8ff] transition-all hover:scale-110 duration-300'><AiOutlineGithub size={40}/></a>
        </motion.div>
      </div>

      {/* IMAGE ANIMATION */}
<motion.img
  initial={{ opacity: 0, scale: 0.85 }}
  whileInView={{ opacity: 1, scale: 1 }}
  whileHover={{
    scale: 1.08,
    boxShadow: "0px 0px 25px #00b8ff",
  }}
  transition={{ duration: 0.9, ease: "easeOut" }}
  viewport={{ once: false, amount: 0.4 }}
  className='w-64 h-64 sm:w-72 sm:h-72 md:w-88 md:h-88 lg:w-96 lg:h-96 object-cover object-top rounded-full border-4 border-secondary shadow-xl mx-auto md:mx-0'
  src={HeroImg}
  alt="Profile"
/>

    </section>
  )
}

export default Hero
