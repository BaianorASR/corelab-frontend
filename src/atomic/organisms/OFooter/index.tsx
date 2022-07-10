import React from 'react';
import styled from 'styled-components';

const Footer = styled.footer`
  align-items: center;
  padding: 1rem;
  background-color: ${({ theme }) => theme.secondary};
  font-size: 0.8rem;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
  text-align: center;
`;

export const OFooter: React.FC<{}> = () => {
  return (
    <Footer>
      feito com <span>❤</span> por <a href="https://github.com/BaianorASR">BaianorASR</a>
    </Footer>
  );
};
