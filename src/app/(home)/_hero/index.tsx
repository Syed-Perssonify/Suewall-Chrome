"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { params } from "@/commen/config/params";
import {
  fadeInUp,
  fadeInBlur,
  staggerContainer,
  wordStagger,
} from "@/commen/config/animations";
import { AnimatedText } from "@/components/ui/animated-text";
import { FeatureItem } from "@/components/ui/feature-item";
import HeroVideoDialog from "@/components/ui/hero-video-dialog";

export default function Hero() {
  const { hero } = params;

  return (
    <main className="overflow-hidden">
      <motion.section
        initial="initial"
        animate="animate"
        variants={staggerContainer}
      >
        <div className="relative pt-16 sm:pt-20 md:pt-24 lg:pt-36">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 -z-10 size-full bg-gradient-to-b from-transparent from-35% to-background"
          />

          <div className="zlk-container">
            <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
              {/* Badge */}
              <motion.div
                {...fadeInBlur}
                transition={{ ...fadeInBlur.transition, delay: 0.2 }}
              >
                <Link
                  href={hero.badge.link}
                  className="hover:bg-background dark:hover:border-t-border bg-muted group mx-auto flex w-fit items-center gap-2 sm:gap-4 rounded-full border p-1 pl-3 sm:pl-4 shadow-md shadow-zinc-950/5 transition-colors duration-300 dark:border-t-white/5 dark:shadow-zinc-950"
                >
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="text-foreground text-xs sm:text-sm px-2 sm:px-0"
                  >
                    {hero.badge.text}
                  </motion.span>
                  <motion.span
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ delay: 0.7, duration: 0.4 }}
                    className="dark:border-background block h-3 sm:h-4 w-0.5 border-l bg-white dark:bg-zinc-700"
                  />
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-background group-hover:bg-muted size-5 sm:size-6 overflow-hidden rounded-full duration-500"
                  >
                    <motion.div
                      initial={{ x: "-50%" }}
                      whileHover={{ x: "0%" }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="flex w-10 sm:w-12 duration-500 ease-in-out"
                    >
                      <span className="flex size-5 sm:size-6">
                        <ArrowRight className="m-auto size-2.5 sm:size-3" />
                      </span>
                      <span className="flex size-5 sm:size-6">
                        <ArrowRight className="m-auto size-2.5 sm:size-3" />
                      </span>
                    </motion.div>
                  </motion.div>
                </Link>
              </motion.div>

              {/* Heading */}
              <motion.h1
                variants={wordStagger}
                className="mt-6 sm:mt-8 text-balance text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl lg:mt-16 xl:text-[5.25rem] px-2 sm:px-0"
              >
                <AnimatedText
                  words={hero.heading}
                  className="mr-2"
                  delay={0.5}
                  staggerDelay={0.1}
                />
              </motion.h1>

              {/* Description */}
              <motion.p
                variants={wordStagger}
                className="mx-auto mt-6 sm:mt-8 max-w-2xl text-balance text-md sm:text-xl px-4 sm:px-0"
              >
                <AnimatedText
                  words={hero.description}
                  delay={1.2}
                  staggerDelay={0.05}
                />
              </motion.p>

              {/* Features */}
              <motion.div
                variants={staggerContainer}
                className="mt-6 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 text-sm sm:text-base px-4 sm:px-0"
              >
                {hero.features.map((feature, index) => (
                  <FeatureItem
                    key={index}
                    icon={feature.icon as "ShieldCheck" | "Lock" | "FileText"}
                    text={feature.text}
                    delay={1.0 + index * 0.2}
                  />
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                variants={staggerContainer}
                className="mt-8 sm:mt-12 flex flex-col items-center justify-center gap-3 sm:gap-2 md:flex-row px-4 sm:px-0"
              >
                <motion.div
                  variants={fadeInBlur}
                  transition={{ ...fadeInBlur.transition, delay: 0.75 }}
                  className="w-full sm:w-auto"
                >
                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Link
                      href={hero.cta.primary.link}
                      className="btn-primary w-full sm:w-auto"
                    >
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.0, duration: 0.5 }}
                        className="text-nowrap"
                      >
                        {hero.cta.primary.text}
                      </motion.span>
                    </Link>
                  </motion.div>
                </motion.div>

                <motion.div
                  variants={fadeInBlur}
                  transition={{ ...fadeInBlur.transition, delay: 1.0 }}
                  className="w-full sm:w-auto"
                >
                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Link
                      href={hero.cta.secondary.link}
                      className="btn-outline w-full sm:w-auto"
                    >
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2, duration: 0.5 }}
                        className="text-nowrap"
                      >
                        {hero.cta.secondary.text}
                      </motion.span>
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Bottom Gradient */}
          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.75 }}
          >
            <div className="relative mt-6 sm:mt-8 md:mt-12 lg:mt-20 overflow-hidden px-2 sm:px-4">
              <motion.div
                initial={{ opacity: 0, scaleY: 0 }}
                animate={{ opacity: 1, scaleY: 1 }}
                transition={{ delay: 1.5, duration: 1, ease: "easeOut" }}
                aria-hidden
                className="bg-gradient-to-b to-background absolute inset-0 z-10 from-transparent from-35%"
              />
            </div>
          </motion.div>

          {/* Hero Video Dialog */}
          <div className="w-full max-w-4xl mx-auto h-[600px]">
            <HeroVideoDialog
              className="block dark:hidden"
              animationStyle="from-center"
              videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
              thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
              thumbnailAlt="Hero Video"
            />
            <HeroVideoDialog
              className="hidden dark:block"
              animationStyle="from-center"
              videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
              thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
              thumbnailAlt="Hero Video"
            />
          </div>
        </div>
      </motion.section>
    </main>
  );
}
