import { createElement } from 'react';

export type HeadingProps = {
  size: 'text-4xl' | 'text-2xl' | 'text-xl' | 'text-lg' | 'text-md'
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  font?: 'font-normal' | 'font-medium' | 'font-semibold' | 'font-bold'
  textTransform?: 'uppercase' | 'lowercase' | 'capitalize' | 'normal-case'
  styleProps?: string
  text: string
};

const Headdings = ({
  size,
  text,
  font = 'font-normal',
  styleProps = '',
  textTransform = 'normal-case',
  tag,
}: HeadingProps) => {
  const classes = `${size} ${styleProps} ${font} ${textTransform}`;

  return createElement(
    tag.toLowerCase(),
    {
      className: classes,
    },
    text,
  );
};

export default Headdings;
