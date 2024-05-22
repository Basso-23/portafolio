import { motion } from "framer-motion";
import React from "react";
import AuroraBackground from "../../ui/aurora-background";
import Hero from "./Hero";

export function AuroraBackgroundDemo() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 1 }}
        whileInView={{ opacity: 1 }}
        transition={{
          delay: 0,
          duration: 0,
          ease: "easeInOut",
        }}
        className="pt-[60px] z-30"
      >
        <Hero />
      </motion.div>
    </AuroraBackground>
  );
}
