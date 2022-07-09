import { ADefaultButton } from 'atomic/atoms/AButton';
import { OOptions } from 'atomic/organisms/OOptions';
import { TSearchCards } from 'atomic/templates/TSearchCards';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Plus } from 'phosphor-react';

const Search: NextPage = () => {
  const { push } = useRouter();

  return (
    <div>
      <OOptions />
      <ADefaultButton type="button" onClick={() => push('/vehicle/create')}>
        <Plus size={32} weight="light" />
        ADICIONAR
      </ADefaultButton>
      <TSearchCards />
    </div>
  );
};

export default Search;
