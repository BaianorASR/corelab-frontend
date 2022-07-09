import styled from 'styled-components';

export const Button = styled.button`
  border: none;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60px;
  padding: 0 26px;
  font-size: 20px;
  line-height: 24px;
  font-weight: 500;
  background-color: ${({ theme }) => theme.primary};
  position: relative;
  transition: all 0.3s ease;

  &:hover {
    filter: brightness(0.8);
    transition: all 0.3s ease;
    cursor: pointer;
  }

  svg {
    position: absolute;
    left: 34px;
    cursor: pointer;
  }
`;
