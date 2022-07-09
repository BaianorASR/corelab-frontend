import styled from 'styled-components';

export const Input = styled.input`
  padding-left: 23px;
  font-weight: 300;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 9999px;
  transition: all 0.05s ease;

  &:focus {
    outline: none;
    transition: all 0.05s ease;
  }
`;
