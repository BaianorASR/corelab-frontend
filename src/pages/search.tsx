import { ADefaultButton } from 'atomic/atoms/AButton';
import { OOptions } from 'atomic/organisms/OOptions';
import { TSearchCards } from 'atomic/templates/TSearchCards';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Plus } from 'phosphor-react';

const Search: NextPage = () => {
  const { push } = useRouter();

  return (
    <>
      <OOptions />
      <ADefaultButton type="button" onClick={() => push('/vehicle/create')} width="full">
        <Plus
          size={32}
          weight="light"
          style={{
            position: 'absolute',
            left: '34px',
          }}
        />
        ADICIONAR
      </ADefaultButton>
      <TSearchCards />
    </>
  );
};

export default Search;
