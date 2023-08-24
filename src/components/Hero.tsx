import Image from 'next/image';
import { Button } from './Button';

const Hero = () => (
  <div className="hero">
    <div className="flex-1 pt-36 padding-x">
      <h1 className="hero__title">
        Encontre, reserve ou alugue um carro - rápido e fácil!
      </h1>
      <p className="hero__subtitle">
        Simplifique sua experiência de aluguel de carros com nosso processo de reserva sem esforço.
      </p>

      <Button.Root rounded className="w-36 mt-5">
        Ver carros
      </Button.Root>
    </div>

    <div className="hero__image-container">
      <div className="hero__image">
        <Image src="/hero.png" alt="hero" fill className="object-contain" />
      </div>

      <div className="hero__image-overlay" />
    </div>
  </div>
);

export default Hero;
