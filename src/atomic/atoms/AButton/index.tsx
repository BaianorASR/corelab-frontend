import { FC, MouseEventHandler, ReactNode } from 'react';

import * as S from './styles';

type ADefaultButtonProps = {
  children: ReactNode;
  type?: 'submit' | 'button';
  onClick?: MouseEventHandler<HTMLButtonElement>;
  width?: number | 'full';
  height?: number;
  padding?: 'small' | 'medium' | 'large';
};

export const ADefaultButton: FC<ADefaultButtonProps> = ({
  children,
  type = 'button',
  onClick,
  width = 100,
  height = 60,
  padding = 'small',
  ...props
}) => {
  return (
    <S.Button
      type={type}
      onClick={onClick}
      className="btn-default"
      width={width}
      height={height}
      padding={padding}
      {...props}
    >
      {children}
    </S.Button>
  );
};
