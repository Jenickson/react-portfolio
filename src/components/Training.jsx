import React from "react";
import { motion } from "framer-motion";

const Training = () => {
  const training = {
    course: "Python Full Stack Development",
    institute: "Pentagon Space",
    duration: "2025",
    topics:
      "Python, Django, REST API, React, MySQL, Git & GitHub, HTML, CSS, JavaScript",
  };

  return (
    <section id="training" className="bg-primary px-5 py-36 text-white">
      <div className="max-w-6xl mx-auto text-center">

        {/* HEADING + SUBTITLE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false }}
          className="mb-14"
        >
          <h1 className="text-5xl font-bold inline-block relative">
            Training
            <span className="absolute left-0 bottom-[-6px] w-full h-[5px] bg-[#00b8ff] rounded-full shadow-[0_0_12px_#00b8ff]"></span>
          </h1>
          <p className="text-xl mt-4 opacity-90">
            Professional full-stack developer training from Pentagon Space.
          </p>
        </motion.div>

        {/* CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }}
          whileHover={{
            scale: 1.06,
            rotateX: 4,
            rotateY: 3,
            transition: { duration: 0.25 },
          }}
          className="max-w-4xl mx-auto backdrop-blur-xl bg-secondary border border-white/20 p-10 rounded-2xl shadow-xl min-h-[280px] flex flex-col justify-center"
        >
          <h2 className="text-3xl font-bold mb-3 text-[#00d0ff]">
            {training.course}
          </h2>
          <p className="text-xl font-semibold opacity-95 mb-1">
            {training.institute}
          </p>
          <p className="text-sm opacity-80 mb-5">
            Year of Completion: {training.duration}
          </p>
          <p className="text-lg opacity-90 leading-relaxed">
            <span className="font-semibold">Technologies Covered:</span> {training.topics}
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Training;
