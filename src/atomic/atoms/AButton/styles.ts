import styled from 'styled-components';

export const Button = styled.button`
  border: none;
  /* border-radius: 9999px; */
  padding: 16px;
  margin: auto;
  font-size: 1rem;
  background-color: ${({ theme }) => theme.primary};
`;
