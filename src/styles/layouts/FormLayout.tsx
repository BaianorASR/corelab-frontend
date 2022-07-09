import { FC, ReactNode } from 'react';
import styled from 'styled-components';

const FormPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  position: relative;

  .btn-back {
    position: absolute;
    top: 10px;
    left: 10px;

    :hover {
      cursor: pointer;
      background-color: ${({ theme }) => theme.secondary};
      padding: 1px;
      border-radius: 5px;
    }
  }
`;

type FormLayoutProps = {
  children: ReactNode;
};

export const FormLayout: FC<FormLayoutProps> = ({ children }) => {
  return <FormPage>{children}</FormPage>;
};
