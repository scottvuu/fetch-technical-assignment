import { SVGIconProps } from '~/types/common';

export const ArrowLeftIcon = ({ ...props }: SVGIconProps) => {
  return (
    <svg className="icon" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M7 14L1 8L7 2" stroke="currentColor" stroke-width="2" stroke-linecap="square" stroke-linejoin="round" />
    </svg>
  );
};
