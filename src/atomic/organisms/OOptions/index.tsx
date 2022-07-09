import 'react-toastify/dist/ReactToastify.css';

import { useRouter } from 'next/router';
import React, { FC, useState } from 'react';
import ReactLoading from 'react-loading';
import { ToastContainer, toast } from 'react-toastify';
import { vehiclesApi } from 'services/api';
import { useSearchContext } from 'shared/contexts/SearchContext';
import { useTheme } from 'styled-components';

import * as S from './styles';

export const OOptions: FC = () => {
  const { push, pathname } = useRouter();
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { setVehiclesFound } = useSearchContext();
  const theme = useTheme();

  const notify = () =>
    toast('O campo de "Busca" é obrigatório, por favor preencha-o.', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      pauseOnFocusLoss: false,
      style: {
        backgroundColor: theme.background,
        color: theme.text,
      },
      draggable: true,
    });

  const searchVehicles = async () => {
    if (!query) return notify();
    setIsLoading(true);
    const vehiclesData = await vehiclesApi.searchVehicles(query);
    setQuery('');
    setVehiclesFound(vehiclesData);
    setIsLoading(false);
    return pathname === '/' && push('/search');
  };

  return (
    <S.Content>
      <ToastContainer />
      <S.InputText
        type="text"
        id="search"
        placeholder="Buscar"
        value={query}
        onChange={({ target: { value } }) => setQuery(value)}
        onKeyUp={e => {
          if (e.key === 'Enter') searchVehicles();
        }}
      />
      {isLoading ? (
        <ReactLoading
          type="spin"
          color={theme.text}
          height={20}
          width={20}
          className="loading"
        />
      ) : (
        <S.SearchIcon weight="regular" opacity={0.8} size={24} onClick={searchVehicles} />
      )}
      <S.FilterIcon
        weight="light"
        opacity={0.8}
        onClick={() => push('/filter_vehicles')}
      />
    </S.Content>
  );
};
