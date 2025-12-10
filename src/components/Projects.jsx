import React from 'react'
import WebsiteImg1 from '../assets/Ecommerce1.png'
import WebsiteImg2 from '../assets/Food1.png'
import WebsiteImg3 from '../assets/blog.jpg'
import { motion } from "framer-motion";

const Projects = () => {

  const config = {
    projects : [
      {
        image: WebsiteImg1,
        description: 'An AI Travel Planner Website. Build with React.js and Tailwind CSS',
        link : 'https://ai-travel-planner-webapp.vercel.app/'
      },
      {
        image: WebsiteImg3, 
        description: 'A Qr code generator Website. Build with Django and Bootstrap CSS',
        link : 'https://qr-code-generator-zj76.onrender.com'
      },
      {
        image: WebsiteImg2,
        
        description: 'An AI Travel Planner Chatbot. Build with Django and Sqlite Database',
        link : 'https://ai-travel-planner-chatbot.onrender.com/'
      }
    ]
  };

  return (
    <section className='flex flex-col py-36 px-5 justify-center bg-secondary text-white' id='projects'>
      
      {/* TITLE ANIMATION */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
        className='text-4xl border-b-4 border-primary mb-5 font-bold w-fit ml-10 '
      >
        Projects
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: false, amount: 0.3 }}
        className='text-xl px-10 mb-10 '>
        These are some of my best projects. I have built them using Frontend and Backend Technologies.
      </motion.p>

      {/* PROJECT CARDS */}
      <div className='flex flex-col md:flex-row px-10 gap-5 md:w-full justify-center items-center'>
        {config.projects.map((project, index) => (
          
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: false, amount: 0.3 }}
            whileHover={{ scale: 1.05 }}     // hover lift effect
            className='relative cursor-pointer rounded-xl overflow-hidden shadow-xl'
          >
            <img className='h-[300px] w-[500px] ' src={project.image} alt='projects'/>

            {/* HOVER DESCRIPTION */}
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className='project-description absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 flex flex-col justify-center items-center text-white text-xl'
            >
              <p className='text-center px-5 py-5'>{project.description}</p>
              <a
                target='_blank'
                rel='noreferrer'
                href={project.link}
                className='btn mt-2'
              >
                View Project
              </a>
            </motion.div>
          </motion.div>

        ))}
      </div>
    </section>
  );
}

export default Projects
