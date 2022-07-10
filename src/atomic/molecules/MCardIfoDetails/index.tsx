import { FC } from 'react';

import * as S from './styles';

type MCardInfoDetailsProps = {
  price: number;
  description: string;
  year: number;
  color: string;
  plate: string;
};

export const MCardInfoDetails: FC<MCardInfoDetailsProps> = ({
  price,
  description,
  year,
  color,
  plate,
}) => {
  return (
    <S.CardDetails color={color}>
      <p>
        <span>Preço:</span> {price}
      </p>
      <p>
        <span>Descrição:</span> {description}
      </p>
      <p>
        <span>Ano:</span> {year}
      </p>
      <p>
        <span>Cor:</span> {color}
      </p>
      <p>
        <span>Placa:</span> {plate}
      </p>
    </S.CardDetails>
  );
};
