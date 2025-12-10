import React from 'react'
import AboutImg from '../assets/About.png'
import { motion } from 'framer-motion'

const About = () => {

  const config = {
    line1 : '-> Hi, My name is Raja Jenickson. I am a Python Full Stack Web Developer. I build beautiful websites with Frontend and Backend Technologies.',
    line2 : "-> I'm proficient in Frontend skills like HTML5, CSS3, Javascript, React.js, Bootstrap CSS, Tailwind CSS and many more.",
    line3 : '-> In Backend I know Python, Django, RestAPIs and MySQL.',
    line4 : '-> Experienced in building responsive, scalable Web Applications and integrating APIs. Passionate about problem-solving and delivering user-friendly solutions.'
  };

  return (
    <>
      <section
        className='flex md:flex-row flex-col bg-secondary px-8 py-36'
        id='about'
      >
        {/* IMAGE – animates every time it comes into view */}
        <motion.div
          className='md:w-1/2 py-5 flex justify-center md:justify-end'
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.4 }} // <- animates on scroll down & up
        >
          <img src={AboutImg} alt='about' />
        </motion.div>

        {/* TEXT – animates from right */}
        <motion.div
          className='md:w-1/2 flex justify-center'
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.4 }}
        >
          <div className='flex flex-col justify-center text-white'>
            <h1 className='text-4xl border-b-4 border-primary mb-5 w-[170px] font-bold'>
              About Me
            </h1>

            {/* staggered lines */}
            <motion.p
              className='pb-5 text-xl'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: false, amount: 0.4 }}
            >
              {config.line1}
            </motion.p>

            <motion.p
              className='pb-5 text-xl'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: false, amount: 0.4 }}
            >
              {config.line2}
            </motion.p>

            <motion.p
              className='pb-5 text-xl'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: false, amount: 0.4 }}
            >
              {config.line3}
            </motion.p>

            <motion.p
              className='pb-5 text-xl'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: false, amount: 0.4 }}
            >
              {config.line4}
            </motion.p>
          </div>
        </motion.div>
      </section>
    </>
  )
}

export default About
