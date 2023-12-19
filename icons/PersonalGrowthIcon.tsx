import React from "react";

interface PersonalGrowthIconProps {
  color?: string;
}

const PersonalGrowthIcon: React.FC<PersonalGrowthIconProps> = ({
  color = "#111",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 127 127"
    >
      <g id="personal-growth" transform="translate(-631 -538)">
        <circle
          id="Ellipse_6"
          data-name="Ellipse 6"
          cx="63.5"
          cy="63.5"
          r="63.5"
          transform="translate(631 538)"
          fill="none"
        />
        <g id="parent-and-kid-svgrepo-com" transform="translate(673 558)">
          <g id="Group_309" data-name="Group 309" transform="translate(0 0)">
            <ellipse
              id="Ellipse_5"
              data-name="Ellipse 5"
              cx="11.236"
              cy="11.236"
              rx="11.236"
              ry="11.236"
              transform="translate(13.495 0)"
              fill={color}
            />
            <path
              id="Path_18"
              data-name="Path 18"
              d="M23.092,51.1l2.942-39.46H44.225v7.5L53.2,33.136,47,37.107l-2.778-4.335V51.1h-2.2L49.8,70.664l-9.286,3.692L34.244,58.575,28.058,74.356l-9.3-3.647L26.446,51.1Z"
              transform="translate(-11.055 12.751)"
              fill={color}
            />
            <path
              id="Path_19"
              data-name="Path 19"
              d="M39.158,35.2h-11.5l2.005-23.228h11.5Z"
              transform="translate(-27.658 13.488)"
              fill={color}
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default PersonalGrowthIcon;