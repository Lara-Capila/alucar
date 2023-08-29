'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import Link from 'next/link';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';
import { Button } from './Button';

const Hero = () => (
  <motion.div
    variants={staggerContainer({})}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className="hero"
  >
    <div className="flex-1 pt-36 padding-x">
      <motion.h1
        variants={textVariant({ delay: 0.5 })}
        className="hero__title"
      >
        Encontre, reserve ou alugue um carro - rápido e fácil!
      </motion.h1>
      <motion.p
        variants={textVariant({ delay: 1 })}
        className="hero__subtitle"
      >
        Simplifique sua experiência de aluguel de carros com nosso processo de reserva sem esforço.
      </motion.p>

      <motion.div variants={textVariant({ delay: 1.3 })}>
        <Link href="#catalogue">
          <Button.Root rounded className="w-36 mt-5">
            Ver carros
          </Button.Root>
        </Link>
      </motion.div>
    </div>

    <motion.div
      variants={slideIn({
        type: 'tween',
        delay: 0.2,
        direction: 'right',
        duration: 1,
      })}
      className="hero__image-container"
    >
      <div className="hero__image">
        <Image src="/hero.png" alt="hero" fill className="object-contain" />
      </div>

      <div className="hero__image-overlay" />
    </motion.div>
  </motion.div>
);

export default Hero;
