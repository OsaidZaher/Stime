"use client";
import { useEffect, useState } from "react";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { motion } from "framer-motion";
import SignupForm from "@/components/signup-form";
import { CrousalLoop } from "@/components/carousalLoop";

export default function Home() {
  const [showText, setShowText] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <section className="flex flex-col gap-4 py-6 md:py-6 custom-margin-right ">
        <TypewriterEffect
          words={[
            { text: "Welcome" },
            { text: "to" },
            { text: "Stime.", className: "text-blue-600 dark:text-blue-300" }, // Test other color classes as well
          ]}
        />
        {showText && (
          <motion.h1
            className="ml-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            The tool to make you that straight A student. Track your study time
            with{" "}
            <span className="text-blue-600 dark:text-blue-300">Stime.</span>
          </motion.h1>
        )}
      </section>
      {showText && (
        <motion.div
          className="ml-5   top-96"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <CrousalLoop />
        </motion.div>
      )}
      {showText && (
        <motion.div
          className="custom-margin-left absolute top-32"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <SignupForm />
        </motion.div>
      )}
    </>
  );
}
