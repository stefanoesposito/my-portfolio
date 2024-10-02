"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const text = "Say Hi!";

  const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();
  //   setError(false);
  //   setSuccess(false);
  //
  //   emailjs
  //     .sendForm(
  //       process.env.NEXT_PUBLIC_SERVICE_ID,
  //       process.env.NEXT_PUBLIC_TEMPLATE_ID,
  //       form.current,
  //       process.env.NEXT_PUBLIC_PUBLIC_KEY
  //     )
  //     .then(
  //       () => {
  //         setSuccess(true);
  //         form.current.reset();
  //       },
  //       () => {
  //         setError(true);
  //       }
  //     );
  // };

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    const templateParams = {
      from_name: form.current.from_name.value,
      to_name: 'Stefano',
      user_email: form.current.user_email.value,
      user_message: form.current.user_message.value,
    };

    console.log(templateParams)
    emailjs
        .send(
            process.env.NEXT_PUBLIC_SERVICE_ID,
            process.env.NEXT_PUBLIC_TEMPLATE_ID,
            templateParams,
            process.env.NEXT_PUBLIC_PUBLIC_KEY
        )
        .then(
            (result) => {
              console.log('Email inviata con successo:', result.text);
              setSuccess(true);
              form.current.reset();
            },
            (error) => {
              console.error('Errore nell\'invio dell\'email:', error);
              setError(true);
            }
        );
  };

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl">
          <div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
            {'\u00A0'}☮️
          </div>
        </div>
        {/* FORM CONTAINER */}
        <form
          onSubmit={sendEmail}
          ref={form}
          className="h-full lg:h-full lg:w-1/2 bg-red-50 rounded-xl flex flex-col gap-4 justify-center p-4 mb-4"
        >
          <span>Hi Stefano,</span>
          <span>My name is:</span>
          <input
              name="from_name"
              type="text"
              className="bg-white rounded-t-lg p-2 border-b-2 border-b-blue-300 outline-none"
          />
          <span>My message:</span>
          <textarea
            rows={6}
            className="bg-white rounded-t-lg p-2 border-b-2 border-b-blue-300 outline-none resize-none"
            name="user_message"
            required
          />
          <span>My mail address is:</span>
          <input
            name="user_email"
            type="text"
            className="bg-white rounded-t-lg p-2 border-b-2 border-b-blue-300 outline-none"
          />
          <input
              className="bg-blue-400 rounded font-semibold text-white p-4"
              id={'button'}
              type={'submit'}
              value={'Send Email'}
           />
          {success && (
            <small className="text-green-600 font-semibold">
              Your message has been sent successfully!
            </small>
          )}
          {error && (
            <small className="text-red-600 font-semibold">
              Something went wrong!
            </small>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;
