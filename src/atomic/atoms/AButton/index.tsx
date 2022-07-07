import { FC, ReactNode } from 'react';

import * as S from './styles';

type ADefaultButtonProps = {
  children: ReactNode;
  type: 'submit' | 'button';
};

export const ADefaultButton: FC<ADefaultButtonProps> = ({
  children,
  type = 'button',
}) => {
  return <S.Button type={type}>{children}</S.Button>;
};
