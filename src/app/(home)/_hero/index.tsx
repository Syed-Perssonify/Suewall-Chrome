"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { params } from "@/commen/config/params";
import {
  fadeInBlur,
  staggerContainer,
  wordStagger,
} from "@/commen/config/animations";
import { AnimatedText } from "@/components/ui/animated-text";
import { FeatureItem } from "@/components/ui/feature-item";
import HeroVideoDialog from "@/components/ui/hero-video-dialog";
import { DotsBackground } from "@/commen/element/layout/dots-background";

export default function Hero() {
  const { hero } = params;

  return (
    <main className="">
      <DotsBackground />
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
              {/* Heading */}
              <motion.h1
                variants={wordStagger}
                className="mt-6 sm:mt-8  text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl lg:mt-16 xl:text-[5.25rem] px-2 sm:px-0 font-plantin text-dark-green"
              >
                <AnimatedText
                  words={hero.heading}
                  className="mr-6"
                  delay={0.5}
                  staggerDelay={0.1}
                />
              </motion.h1>

              {/* Description */}
              <motion.p
                variants={wordStagger}
                className="mx-auto mt-6 sm:mt-8 max-w-2xl text-balance text-md sm:text-xl px-4 sm:px-0 font-galano text-gray leading-relaxed"
              >
                <AnimatedText
                  words={hero.description}
                  className="mr-2"
                  delay={1.2}
                  staggerDelay={0.05}
                />
              </motion.p>

              {/* Features */}
              <motion.div
                variants={staggerContainer}
                className="mt-6 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 text-md sm:text-base px-4 sm:px-0"
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
            {/* Hero Video Dialog */}
            <div className="w-full mt-16 max-w-4xl mx-auto h-[600px]">
              <HeroVideoDialog
                className="block w-full h-11/12 dark:hidden"
                animationStyle="from-center"
                videoSrc="#"
                thumbnailSrc="/images/11.jpg"
                thumbnailAlt="Hero Video"
              />
              <HeroVideoDialog
                className="hidden w-full h-full dark:block"
                animationStyle="from-center"
                videoSrc="#"
                thumbnailSrc="/images/11.jpg"
                thumbnailAlt="Hero Video"
              />
            </div>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
