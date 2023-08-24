import Image from 'next/image';
import Link from 'next/link';
import { footerLinks } from './constants/footer';

const Footer = () => (
  <footer className="flex flex-wrap gap-5 justify-between px-6 py-10 sm:px-16 border-t border-gray-100">
    <div className="flex flex-col gap-2 justify-start items-start">
      <Image
        alt="AluCar logo"
        src="/logo.svg"
        width={120}
        height={18}
        className="object-contain"
      />
      <p className="text-sm text-gray-500">
        AluCar 2023
        <br />
        Todos os direitos reservados &copy;
      </p>
    </div>

    <div className="grid grid-cols-3 gap-12 flex-wrap">
      {footerLinks.map((section) => (
        <div key={section.title}>
          <h1 className="font-medium text-lg mb-4">{section.title}</h1>
          <ol className="flex flex-col gap-3">
            {section.links.map((link) => (
              <Link
                key={link.url + link.title}
                href={link.url}
                className="
                  text-sm text-gray-500
                  hover:text-black
                "
              >
                {link.title}
              </Link>
            ))}
          </ol>
        </div>
      ))}
    </div>
  </footer>
);

export default Footer;
