import { ADefaultButton } from 'atomic/atoms/AButton';
import { OOptions } from 'atomic/organisms/OOptions';
import { TAdsCards } from 'atomic/templates/TAdsCards';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Plus } from 'phosphor-react';
import type { IVehiclesData } from 'shared/types/IVehiclesData';

import { vehiclesApi } from '../services/api';

type HomePageProps = {
  vehicles: IVehiclesData[];
};

const Home: NextPage<HomePageProps> = ({ vehicles }) => {
  const { push } = useRouter();

  return (
    <div>
      <OOptions />
      <ADefaultButton type="button" onClick={() => push('/vehicle/create')}>
        <Plus size={32} weight="light" />
        ADICIONAR
      </ADefaultButton>

      <TAdsCards vehicles={vehicles} />

      <footer>create by baianim</footer>
    </div>
  );
};

export const getServerSideProps = async () => {
  const vehicles = await vehiclesApi.getAllVehicles();
  return {
    props: {
      vehicles,
    },
  };
};

export default Home;
