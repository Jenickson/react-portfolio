import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    { name: "HTML", level: "90%" },
    { name: "CSS", level: "85%" },
    { name: "Tailwind CSS", level: "85%" },
    { name: "Bootstrap CSS", level: "85%" },
    { name: "JavaScript", level: "80%" },
    { name: "React JS", level: "75%" },
    { name: "Python", level: "88%" },
    { name: "Django", level: "78%" },
    { name: "MySQL", level: "80%" },
    { name: "REST APIs", level: "65%" },
    { name: "Git & GitHub", level: "70%" },
    { name: "Canva", level: "90%" },
  ];

  return (
    <section className="bg-primary px-5 py-36 text-white" id="skills">
      <div className="max-w-5xl mx-auto">

        {/* Title animation */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false, amount: 0.4 }}
          className="text-4xl border-b-4 border-secondary mb-10 w-[155px] font-bold"
        >
          My Skills
        </motion.h1>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: false, amount: 0.4 }}   // 🔥 works on scroll up + down
            >
              <div className="flex justify-between mb-1">
                <span className="font-semibold">{skill.name}</span>
                <span>{skill.level}</span>
              </div>

              <div className="w-full bg-gray-200 h-3 rounded-md overflow-hidden">
                <motion.div
                  className="bg-secondary h-3 rounded-md"
                  initial={{ width: 0 }}
                  whileInView={{ width: skill.level }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: false, amount: 0.4 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
