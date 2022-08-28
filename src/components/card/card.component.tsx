import styled from "styled-components";

const Card = styled.div`
  background-color: ${({ theme }) => theme.backgroundPrimary};
  transition: background-color ease ${({ theme }) => theme.transitionDelay};
  border-radius: 0.5rem;
  padding: 1rem 1.5rem;
  max-width: 23rem;
  box-sizing: border-box;
`;

export { Card };
