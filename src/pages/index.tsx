// import { ADefaultButton } from 'atomic/atoms/AButton';
// import { OHeader } from 'atomic/organisms/OHeader';
import { OOptions } from 'atomic/organisms/OOptions';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Heart, Plus, X } from 'phosphor-react';
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
      <button type="button" onClick={() => push('/create_vehicle')}>
        <Plus size={32} weight="light" />
        ADICIONAR
      </button>

      <section>
        <ul>
          {vehicles.map(vehicle => (
            <li>
              <hr />
              <div>
                <div>
                  <X size={26} weight="light" />
                  <Heart size={26} weight="light" />
                </div>
                <h1>{vehicle.name}</h1>
                <p>{vehicle.description}</p>
                <p>{vehicle.color}</p>
                <p>{vehicle.plate}</p>
                <p>{vehicle.price}</p>
                <p>{vehicle.year}</p>
              </div>
              <hr />
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
