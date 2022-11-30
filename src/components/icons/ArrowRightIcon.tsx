import { SVGIconProps } from '~/types/common';

export const ArrowRightIcon = ({ ...props }: SVGIconProps) => {
  return (
    <svg className="icon" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M2 14L8 8L2 2" stroke="currentColor" strokeWidth={2} strokeLinecap="square" strokeLinejoin="round" />
    </svg>
  );
};
