// src/components/Contact.jsx
import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineInstagram
} from "react-icons/ai";

const Contact = () => {
  const formRef = useRef(null);
  const [sending, setSending] = useState(false);
  const [popup, setPopup] = useState(null); // "success" | "error" | null

  // --- EmailJS config from env (CRA)
  const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE;
  const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE;
  const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC;

  // close popup on Esc
  useEffect(() => {
    if (!popup) return;
    const onKey = (e) => {
      if (e.key === "Escape") setPopup(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [popup]);

  // helper to show popup
  const showPopup = (type) => {
    setPopup(type);
    setTimeout(() => setPopup(null), 3000);
  };

const sendEmail = async (e) => {
  e.preventDefault();

  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    showPopup("error");
    return;
  }

  setSending(true);

  try {
    await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
    showPopup("success");
    formRef.current.reset();
  } catch {
    showPopup("error");
  } finally {
    setSending(false);
  }
};


  const config = {
    email: "jenickson9790521130@gmail.com",
    phone: "+91 9092055150",
    social: {
      linkedin: "https://www.linkedin.com/in/raja-jenickson-107283238/",
      github: "https://github.com/Jenickson",
      instagram: "https://www.instagram.com/_.crazy._.kido._?igsh=MWhkNXB5Y2pqcm80Zg=="
    }
  };


  return (
    <section
      id="contact"
      className="bg-primary text-white px-5 py-36 flex justify-center relative"
    >
      {/* accessible popup (aria-live) */}
      {popup && (
        <div
          role="status"
          aria-live="polite"
          className={`fixed top-5 right-5 px-5 py-3 rounded-md text-white font-semibold z-50 ${
            popup === "success" ? "bg-green-600" : "bg-red-600"
          } shadow-xl`}
        >
          {popup === "success"
            ? "📩 Message Sent Successfully!"
            : "❌ Failed to Send. Try Again!"}
        </div>
      )}

      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* LEFT — CONTACT CARD */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.4 }}
          className="backdrop-blur-xl bg-secondary border border-white/20 p-8 rounded-2xl shadow-xl flex flex-col justify-center"
        >
          <h2 className="text-4xl font-bold mb-5 border-b-4 border-primary w-[195px]">
            Contact Me
          </h2>
          <p className="text-xl mb-6">
            If you want to discuss more in detail, please reach out.
          </p>

          <div className="space-y-4 text-lg">
            <p className="flex items-center gap-3">
              <AiOutlineMail size={25} className="hover:text-[#00b8ff] transition-all hover:scale-110 duration-300" />
              <a href={`mailto:${config.email}`} className="hover:underline">
                {config.email}
              </a>
            </p>

            <p className="flex items-center gap-3">
              <AiOutlinePhone size={25} className="hover:text-[#00b8ff] transition-all hover:scale-110 duration-300" />
              <a href={`tel:${config.phone}`} className="hover:underline">
                {config.phone}
              </a>
            </p>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex gap-5 mt-6">
            <a
              className="hover:text-[#00b8ff] transition-all hover:scale-110 duration-300"
              href={config.social.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineLinkedin size={32} />
            </a>
            <a
              className="hover:text-[#00b8ff] transition-all hover:scale-110 duration-300"
              href={config.social.github}
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineGithub size={32} />
            </a>
            <a
              className="hover:text-[#00b8ff] transition-all hover:scale-110 duration-300"
              href={config.social.instagram}
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineInstagram size={32} />
            </a>
          </div>
        </motion.div>

        {/* RIGHT — CONTACT FORM */}
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.4 }}
          className="bg-secondary backdrop-blur-xl border border-white/20 p-8 rounded-2xl shadow-xl space-y-5"
        >
          <h2 className="text-3xl font-semibold mb-3">Send Message</h2>

          {/* NOTE: names must match the template variables in EmailJS */}
          <label className="sr-only" htmlFor="user_name">Your Name</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-md text-black"
          />

          <label className="sr-only" htmlFor="user_email">Your Email</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-md text-black"
          />

          <label className="sr-only" htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Message"
            required
            rows="4"
            className="w-full p-3 rounded-md text-black"
          />

          <button
            type="submit"
            disabled={sending}
            aria-busy={sending}
            className={`btn w-full font-bold duration-300 ${
              sending ? "opacity-60 cursor-not-allowed" : "hover:scale-105 hover:shadow-[0_0_15px_#6C63FF]"
            }`}
          >
            {sending ? "Sending..." : "Send"}
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
