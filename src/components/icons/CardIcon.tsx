import { SVGIconProps } from '~/types/common';

export const CardIcon = ({ ...props }: SVGIconProps) => {
  return (
    <svg className="icon" viewBox="0 0 40 27" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g clipPath="url(#clip0_0_3)">
        <path
          d="M33 1H7C3.68629 1 1 3.68629 1 7V20C1 23.3137 3.68629 26 7 26H33C36.3137 26 39 23.3137 39 20V7C39 3.68629 36.3137 1 33 1Z"
          stroke="currentColor"
          strokeWidth={2}
        />
        <path d="M0 11H40" stroke="currentColor" strokeWidth={2} />
      </g>
      <defs>
        <clipPath id="clip0_0_3">
          <rect width={40} height={27} fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
