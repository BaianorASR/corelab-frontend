import { ADefaultButton } from 'atomic/atoms/AButton';
import { OOptions } from 'atomic/organisms/OOptions';
import { TAdsCards } from 'atomic/templates/TAdsCards';
import { TFavoritesCards } from 'atomic/templates/TFavoritesCards';
import { TMyCards } from 'atomic/templates/TMyCards';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Plus } from 'phosphor-react';
import { vehiclesApi } from 'services/api';
import { SWRConfig } from 'swr';

type HomePageProps = {
  fallback: () => JSX.Element;
};

const Home: NextPage<HomePageProps> = ({ fallback }) => {
  const { push } = useRouter();

  return (
    <div>
      <OOptions />
      <ADefaultButton type="button" onClick={() => push('/vehicle/create')}>
        <Plus size={32} weight="light" />
        ADICIONAR
      </ADefaultButton>

      <SWRConfig value={{ fallback }}>
        <TFavoritesCards />
        <TMyCards />
        <TAdsCards />
      </SWRConfig>
    </div>
  );
};

export async function getStaticProps() {
  const allVehicles = await vehiclesApi.getAllVehicles();
  const favorites = await vehiclesApi.getFavoriteVehicles();

  return {
    props: {
      fallback: {
        favorites,
        allVehicles,
        'my-vehicles': allVehicles,
      },
    },
  };
}

export default Home;
