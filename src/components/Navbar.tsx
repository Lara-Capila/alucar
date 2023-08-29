'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import { slideIn } from '../utils/motion';

const Navbar = () => (
  <header className="w-full absolute z-10">
    <motion.nav
      variants={slideIn({
        type: 'tween',
        delay: 0.2,
        direction: 'left',
        duration: 1,
      })}
      initial="hidden"
      whileInView="show"
      className="
        max-w-[1440px] mx-auto
        flex justify-between items-center
        sm:px-16 px-6 py-4
        bg-transparent
      "
    >
      <Link href="/">
        <Image
          src="/logo.svg"
          alt="AluCar Logo"
          width={120}
          height={150}
        />
      </Link>
    </motion.nav>
  </header>
);

export default Navbar;
