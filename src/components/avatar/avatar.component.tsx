import type { FC } from "react";
import Image from "next/future/image";
import { useAmp } from "next/amp";
import styled from "styled-components";

type AvatarProps = {
  size: number | string;
  alt: string;
  src: any;
};

const ImageStyled = styled.img`
  object-fit: cover;
  border-radius: 100%;
  filter: brightness(105%) !important;
  border: 3px solid ${({ theme }) => theme.borderColor} !important;
  transition: border ease ${({ theme }) => theme.transitionDelay};
`;

const Avatar: FC<AvatarProps> = ({ alt, size, src }) => {
  const isAmp = useAmp();

  return isAmp ? (
    <amp-img height={size} width={size} src={src} alt={alt} layout={"fixed"} />
  ) : (
    <ImageStyled as={Image} alt={alt} height={size} width={size} src={src} />
  );
};

export { Avatar };
