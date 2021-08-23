import styled from "styled-components";

interface ICenterProps {
  wrapItems?: boolean;
}

const Center = styled.div<ICenterProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: ${(props) => (!!props.wrapItems ? "wrap" : "inherit")};
`;

export { Center };
