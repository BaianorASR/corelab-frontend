import React from 'react';

import * as S from './styles';

export const OOptions: React.FC = () => {
  return (
    <S.Content>
      <S.InputText type="text" id="search" placeholder="Buscar" />
      <S.SearchIcon weight="regular" opacity={0.8} size={20} />
      <S.FilterIcon weight="light" opacity={0.8} />
    </S.Content>
  );
};
