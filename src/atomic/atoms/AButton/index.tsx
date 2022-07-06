import { FC, ReactNode } from 'react';

import * as S from './styles';

type ADefaultButtonProps = {
  children: ReactNode;
};

export const ADefaultButton: FC<ADefaultButtonProps> = ({ children }) => {
  return <S.Button type="button">{children}</S.Button>;
};
