import { SVGIconProps } from '~/types/common';

export const HomeIcon = ({ ...props }: SVGIconProps) => {
  return (
    <svg className="icon" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M13.3727 1.82033L13.3727 1.82035L13.3782 1.81642C14.9142 0.727859 17.0858 0.727859 18.6218 1.81642L18.6218 1.81644L18.6273 1.82033L29.281 9.26269C30.3836 10.0339 31 11.2098 31 12.4454V27.0148C31 29.1362 29.1052 31 26.6541 31H5.34588C2.89475 31 1 29.1362 1 27.0148V12.4454C1 11.2098 1.61637 10.0339 2.71901 9.26269L13.3727 1.82033Z"
        stroke="currentColor"
        strokeWidth={2}
      />
    </svg>
  );
};
