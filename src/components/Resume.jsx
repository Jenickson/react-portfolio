import React, { useState } from 'react'
import ResumeImg from '../assets/Resume.jpg'
import PdfFile from '../assets/Resume.pdf'
import { motion } from "framer-motion";

const Resume = () => {

  const config = {
    resumePdf : PdfFile
  };

  const [openPopup, setOpenPopup] = useState(false);

  return (
    <>
      <section className='flex md:flex-row flex-col bg-secondary px-5 py-36' id='resume'>

        {/* IMAGE ANIMATION */}
        <motion.div
          className='md:w-1/2 py-5 flex justify-center md:justify-center'
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.4 }}
        >
          <img className='w-[400px]' src={ResumeImg} alt='resume'/>
        </motion.div>

        {/* TEXT ANIMATION */}
        <motion.div
          className='md:w-1/2 flex justify-start'
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.4 }}
        >
          <div className='flex flex-col justify-center md:justify-center items-start text-white'>

            {/* TITLE */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: false }}
              className='text-4xl border-b-4 border-primary mb-5 w-[135px] font-bold'
            >
              Resume
            </motion.h1>

            {/* TEXT + BUTTON */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false }}
              className='pb-5 text-xl'
            >
              You can view my resume here ➜{" "}
              <button
                onClick={() => setOpenPopup(true)}
                className='btn inline-block ml-2 hover:scale-105 hover:shadow-[0_0_15px_#6C63FF] duration-300'
              >
                View Resume
              </button>
            </motion.p>

          </div>
        </motion.div>
      </section>

      {/* 🔥 POPUP MODAL VIEWER */}
      {openPopup && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white w-[92%] md:w-[75%] h-[85%] rounded-xl overflow-hidden shadow-2xl relative">

            {/* CLOSE BUTTON */}
            <button
              onClick={() => setOpenPopup(false)}
              className="absolute top-2 right-4 text-3xl font-bold text-black hover:text-red-600 transition"
            >
              ✕
            </button>

            {/* PDF VIEWER */}
            <iframe
              src={config.resumePdf}
              title="Resume PDF"
              className="w-full h-full"
            ></iframe>

          </div>
        </div>
      )}
    </>
  )
}

export default Resume
