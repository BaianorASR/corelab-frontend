import styled, { css } from 'styled-components';

type ButtonProps = {
  width?: number | 'full';
  height?: number;
  padding?: 'small' | 'medium' | 'large';
};

export const Button = styled.button<ButtonProps>`
  ${({ theme, width, height, padding }) => css`
    width: ${width === 'full' ? '100%' : `${width}px`};
    height: ${`${height}px`};
    padding: ${`${padding}px`};
    background-color: ${theme.primary};
  `}

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  border-radius: 9999px;

  font-size: 16px;
  line-height: 16px;
  font-weight: 500;

  position: relative;
  transition: all 0.3s ease;

  &:hover {
    filter: brightness(0.8);
    cursor: pointer;
  }
`;
