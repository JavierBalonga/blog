import { SVGAttributes } from "react";

export default function ArrowUpCircleIcon(props: SVGAttributes<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 19V5M12 5L6 11M12 5L18 11" />
    </svg>
  );
}
