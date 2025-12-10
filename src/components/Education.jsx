import React from "react";
import { motion } from "framer-motion";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Engineering — Computer Science",
      college: "Coimbatore Institute of Engineering and Technology - 75%",
      duration: "2021 – 2025",
    },
    {
      degree: "Higher Secondary School (12th)",
      college: "Rose Mary Matric Hr Sec School - 84%",
      duration: "2020 – 2021",
    },
    {
      degree: "SSLC (10th)",
      college: "Rose Mary Matric Hr Sec School - 79%",
      duration: "2018 – 2019",
    },
  ];

  // Stagger animation for cards
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.20 },
    },
  };

  const card = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <section id="education" className="bg-primary px-5 py-36 text-white">
      <div className="max-w-7xl mx-auto">

        {/* HEADING ANIMATION */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false }}
          className="text-4xl border-b-4 border-[#00b8ff] mb-10 w-fit font-bold "
        >
          Educational Qualifications
        </motion.h1>

        {/* CARD ANIMATION CONTAINER */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7"
        >
          {education.map((edu, index) => (
            <motion.div
              key={index}
              variants={card}
              whileHover={{
                scale: 1.06,
                rotateX: 4,
                rotateY: 4,
                transition: { duration: 0.25 },
              }}
              className="backdrop-blur-xl bg-secondary border border-white/20 p-8  rounded-2xl shadow-xl min-h-[270px] flex flex-col justify-start"
            >
              <h2 className="text-2xl font-bold mb-3">{edu.degree}</h2>
              <p className="text-lg opacity-90">{edu.college}</p>
              <p className="mt-2 text-sm opacity-80">{edu.duration}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
