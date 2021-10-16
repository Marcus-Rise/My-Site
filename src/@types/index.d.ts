import type { FC, SVGProps } from "react";

declare global {
  type IconProps = Omit<SVGProps<SVGSVGElement>, "ref">;
  type Icon = FC<IconProps>;
}
