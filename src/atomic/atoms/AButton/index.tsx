import { FC, MouseEventHandler, ReactNode } from 'react';

import * as S from './styles';

type ADefaultButtonProps = {
  children: ReactNode;
  type?: 'submit' | 'button';
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export const ADefaultButton: FC<ADefaultButtonProps> = ({
  children,
  type = 'button',
  onClick,
}) => {
  return (
    <S.Button type={type} onClick={onClick} className="btn-default">
      {children}
    </S.Button>
  );
};
