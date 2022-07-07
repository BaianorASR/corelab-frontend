import { FC, ReactNode } from 'react';

import * as S from './styles';

type ALabelProps = {
  children: ReactNode;
  label: string;
};

export const ALabel: FC<ALabelProps> = ({ children, label }) => {
  return (
    <S.Label htmlFor="input">
      <span>{label}</span>
      {children}
    </S.Label>
  );
};
