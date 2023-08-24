import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => (
  <header className="w-full absolute z-10">
    <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent">
      <Link href="/">
        <Image
          src="/logo.svg"
          alt="AluCar Logo"
          width={120}
          height={150}
        />
      </Link>
    </nav>
  </header>
);

export default Navbar;
