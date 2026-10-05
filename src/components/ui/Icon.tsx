import type { SVGProps } from "react";

/** Minimal inline stroke icons (24×24). No icon dependency (see ARCHITECTURE.md §11). */
const paths = {
  home: "M3 11l9-8 9 8M5 10v10h14V10M10 20v-6h4v6",
  search: "M11 4a7 7 0 100 14 7 7 0 000-14zM21 21l-5-5",
  compare: "M7 7h13M16 3l4 4-4 4M17 17H4M8 13l-4 4 4 4",
  info: "M12 3a9 9 0 100 18 9 9 0 000-18zM12 11v6M12 7.5v.01",
  pin: "M12 21s7-6.2 7-11.5a7 7 0 10-14 0C5 14.8 12 21 12 21zM12 7.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5z",
  transport:
    "M5 4h14a1 1 0 011 1v11a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1zM4 11h16M7 20v-3M17 20v-3M8 14h.01M16 14h.01",
  rent: "M3 7h18v10H3zM12 9.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM6 12h.01M18 12h.01",
  education: "M12 6c-2-1.5-5-2-8-2v14c3 0 6 .5 8 2 2-1.5 5-2 8-2V4c-3 0-6 .5-8 2zM12 6v14",
  healthcare: "M9 3h6v6h6v6h-6v6H9v-6H3V9h6z",
  internet: "M2.5 9a15 15 0 0119 0M5.5 12.5a10.5 10.5 0 0113 0M8.5 16a6 6 0 016.9 0M12 19.5h.01",
  safety: "M12 3l8 3v6c0 4.5-3.2 8-8 9-4.8-1-8-4.5-8-9V6l8-3z",
  traffic:
    "M9 3h6a1 1 0 011 1v16a1 1 0 01-1 1H9a1 1 0 01-1-1V4a1 1 0 011-1zM12 7.5h.01M12 12h.01M12 16.5h.01",
  lifestyle: "M12 3a5 5 0 00-4 8 4 4 0 001 7.5h6A4 4 0 0016 11a5 5 0 00-4-8zM12 18.5V22",
  food: "M3 11h18a9 9 0 01-18 0zM8 4c0 1.5 1 1.5 1 3M12 3c0 1.5 1 1.5 1 3M16 4c0 1.5 1 1.5 1 3",
  student: "M2 9l10-5 10 5-10 5L2 9zM6 11.5V16c0 1.5 3 3 6 3s6-1.5 6-3v-4.5M22 9v6",
} as const;

export type IconName = keyof typeof paths;

interface IconProps extends Omit<SVGProps<SVGSVGElement>, "name"> {
  name: IconName;
  size?: number;
}

export function Icon({ name, size = 24, ...rest }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      <path d={paths[name]} />
    </svg>
  );
}
