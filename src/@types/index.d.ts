import type { FC, ReactElement, SVGProps } from "react";
import type { NextPage } from "next";

declare global {
  type IconProps = Omit<SVGProps<SVGSVGElement>, "ref">;
  type Icon = FC<IconProps>;

  type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode;
  };
}
