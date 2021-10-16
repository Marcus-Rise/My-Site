import styled from "styled-components";

enum CenterYAlign {
  CENTER = "center",
  AROUND = "space-around",
}

interface ICenterProps {
  wrapItems?: boolean;
  yAlign?: CenterYAlign;
}

const Center = styled.div<ICenterProps>`
  display: flex;
  justify-content: ${(props) => props.yAlign ?? CenterYAlign.CENTER};
  align-items: center;
  flex-wrap: ${(props) => (!!props.wrapItems ? "wrap" : "inherit")};
`;

export { Center, CenterYAlign };
