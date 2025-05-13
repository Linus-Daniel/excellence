"use client";
import CTA from "@/components/cta";
import Features from "@/components/features";
import Footer from "@/components/footer";
import Gallery from "@/components/gallery";
import Hero from "@/components/hero";
import Navbar from "@/components/navBar";
import Testimonials from "@/components/testimonial";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Hero />
        <Features />
        <Testimonials />
        <Gallery />
        <CTA />
      </motion.main>
      <Footer />
    </div>
  );
}
