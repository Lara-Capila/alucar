import { ButtonHTMLAttributes, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type ButtonVariants = {
  [key: string]: string[];
};

interface ButtonRootProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'borderless' | 'default'
  rounded?: boolean
}

const variantsStyle: ButtonVariants = {
  borderless: [
    'border border-primary-blue color-black',
  ],
  default: [
    'border-none bg-primary-blue text-white',
  ],
};

const ButtonRoot = ({
  children, variant = 'default', rounded, ...rest
}: ButtonRootProps) => {
  const buttonStyle = variantsStyle[variant];
  const isRounded = rounded ? 'rounded-3xl' : '';
  return (
    <button
      {...rest}
      type="button"
      className={
        twMerge(
          'py-3 px-6 flex justify-center items-center w-full',
          buttonStyle,
          isRounded,
          rest.className,
        )
      }
    >
      {children}
    </button>
  );
};

export default ButtonRoot;
