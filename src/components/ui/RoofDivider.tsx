export interface RoofDividerProps {
  color?: string;
  withChimney?: boolean;
  className?: string;
}

export default function RoofDivider({
  color = "currentColor",
  withChimney = false,
  className = "",
}: RoofDividerProps) {
  return (
    <svg
      viewBox="0 0 1028 385"
      className={className}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill={color}
        d="M20 335C180 345 380 240 465 15C620 130 850 290 1010 305C850 320 620 200 465 145C380 280 180 360 20 335Z"
      />
      {withChimney && (
        <g fill={color}>
          <rect x="643" y="60" width="14" height="112" />
          <path
            fillRule="evenodd"
            d="M633 60L667 60L660 42L640 42Z M648.5 45L651.5 45L651.5 49.5L655 49.5L655 52.5L651.5 52.5L651.5 57L648.5 57L648.5 52.5L645 52.5L645 49.5L648.5 49.5Z"
          />
        </g>
      )}
    </svg>
  );
}
