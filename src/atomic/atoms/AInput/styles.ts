import styled from 'styled-components';

export const Input = styled.input`
  padding-left: 23px;
  font-size: 14px;
  /* line-height: 17px; */
  font-weight: 300;
  height: 38px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 9999px;
  transition: all 0.05s ease;

  &:focus {
    outline: none;
    transition: all 0.05s ease;
  }
`;
