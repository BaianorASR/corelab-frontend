import { ADefaultButton } from 'atomic/atoms/AButton';
import { OOptions } from 'atomic/organisms/OOptions';
import { OVehicleCard } from 'atomic/organisms/OVehicleCard';
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
      {/* <OHeader /> */}
      <OOptions />
      <ADefaultButton type="button" onClick={() => push('/vehicle/create')}>
        <Plus size={32} weight="light" />
        ADICIONAR
      </ADefaultButton>

      <section>
        <ul>
          {vehicles.map(vehicle => (
            <li>
              <OVehicleCard vehicle={vehicle} key={vehicle.id} />
            </li>
          ))}
        </ul>
      </section>

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
