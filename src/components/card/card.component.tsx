import styled from "styled-components";

const Card = styled.div`
  background-color: ${({ theme }) => theme.backgroundPrimary};
  border-radius: 0.5rem;
  padding: 1rem 1.5rem;
  max-width: 350px;
  box-sizing: border-box;
`;

export { Card };
