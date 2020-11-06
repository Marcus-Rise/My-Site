import React from "react";
import Image from "next/image";
import { useAmp } from "next/amp";

interface IProps {
  size: number | string;
  alt: string;
  src: string;
}

const Avatar: React.FC<IProps> = (props) => {
  const isAmp = useAmp();

  return isAmp ? (
    <amp-img height={props.size} width={props.size} src={props.src} alt={props.alt} layout={"fixed"} />
  ) : (
    <Image alt={props.alt} height={props.size} width={props.size} src={props.src} />
  );
};

export { Avatar };
