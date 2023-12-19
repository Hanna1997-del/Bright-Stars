import React from "react";

interface SocialResponsibilityIconProps {
  color?: string
}

const SocialResponsibilityIcon: React.FC<
  SocialResponsibilityIconProps
> = ({color="#111"}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 127 127"
    >
      <g id="social-responsibility" transform="translate(-264 -483)">
        <circle
          id="Ellipse_11"
          data-name="Ellipse 11"
          cx="63.5"
          cy="63.5"
          r="63.5"
          transform="translate(264 483)"
          fill="none"
        />
        <path
          id="Subtraction_1"
          data-name="Subtraction 1"
          fill={color}
          d="M-1932-1133h-58v-58h58v58Zm-47.025-26.265a18.611,18.611,0,0,0,18.572,17.51,18.612,18.612,0,0,0,18.573-17.509Zm31.7-22.981a6.573,6.573,0,0,0-6.566,6.565,6.574,6.574,0,0,0,6.566,6.566,6.573,6.573,0,0,0,6.565-6.566A6.573,6.573,0,0,0-1947.321-1182.245Zm-26.264,0a6.573,6.573,0,0,0-6.566,6.565,6.574,6.574,0,0,0,6.566,6.566,6.574,6.574,0,0,0,6.566-6.566A6.573,6.573,0,0,0-1973.585-1182.245Z"
          transform="translate(2289 1709)"
        />
      </g>
    </svg>
  );
};

export default SocialResponsibilityIcon;