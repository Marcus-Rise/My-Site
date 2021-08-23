import styled from "styled-components";

enum ChipSizeEnum {
  big,
}

interface IChipProps {
  size?: ChipSizeEnum;
  className?: string;
}

const Chip = styled.span<IChipProps>`
  background-color: ${({ theme }) => theme.backgroundSecondary};
  border-radius: 1.5rem;
  padding: 0.5rem 0.75rem;
  letter-spacing: 0.14994px;
  box-sizing: border-box;
  color: ${({ theme }) => theme.textPrimary};
  font-weight: 400;
  font-size: ${({ size }) => (size === ChipSizeEnum.big ? "0.85rem" : "0.8rem")};
`;

export { Chip, ChipSizeEnum };
