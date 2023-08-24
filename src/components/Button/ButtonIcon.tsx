import * as Outline from '@heroicons/react/24/outline';
import * as Solid from '@heroicons/react/24/solid';
import { twMerge } from 'tailwind-merge';

export type IconName = keyof typeof Solid | keyof typeof Outline;
interface ButtonIconProps {
  icon: IconName
  className?: string
  outline?: boolean
}

const ButtonIcon = ({ icon, className, outline = false }: ButtonIconProps) => {
  const Icon = outline ? Outline[icon] : Solid[icon];

  return (
    <div className="px-1">
      <Icon className={twMerge('h-5 w-5', className)} />
    </div>
  );
};

export default ButtonIcon;
