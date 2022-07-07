import { FC } from 'react';

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
    <div>
      <p>Preço: {price}</p>
      <p>Descrição: {description}</p>
      <p>Ano: {year}</p>
      <p>Cor: {color}</p>
      <p>Placa: {plate}</p>
    </div>
  );
};
