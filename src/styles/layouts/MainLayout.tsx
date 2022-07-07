import { FC, ReactNode } from 'react';
import styled from 'styled-components';

const Layout = styled.div`
  margin: 0 auto;
  max-width: 90%;
  min-height: 100vh;

  @media (min-width: 768px) {
    max-width: 700px;
  }

  @media (min-width: 992px) {
    max-width: 896px;
  }
`;

type MainLayoutProps = {
  children: ReactNode;
};

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return <Layout>{children}</Layout>;
};
