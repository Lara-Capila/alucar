import { createElement } from 'react';

type TextProps = {
  size?: 'text-xs' | 'text-sm' | 'text-base'
  font?: 'font-normal' | 'font-medium' | 'font-semibold' | 'font-bold'
  textTransform?: 'uppercase' | 'lowercase' | 'capitalize' | 'normal-case'
  styleProps?: string
  text: string
  className?: string
};

const Text = ({
  size = 'text-base',
  text,
  font = 'font-normal',
  styleProps = '',
  textTransform = 'normal-case',
  className = '',
}: TextProps) => {
  const classes = `${size} ${styleProps} ${font} ${textTransform} ${className}`;

  return createElement(
    'p',
    {
      className: classes,
    },
    text,
  );
};

export default Text;
