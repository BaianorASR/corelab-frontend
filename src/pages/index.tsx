import { OHeader } from 'atomic/organisms/OHeader';
import { OOptions } from 'atomic/organisms/OOptions';
import type { NextPage } from 'next';

import { vehiclesApi } from '../services/api';

const Home: NextPage = () => {
  return (
    <div>
      <OHeader />
      <OOptions />
      <button type="button">Adicionar</button>

      <section>
        <ul>
          <li>a</li>
          <li>b</li>
          <li>c</li>
          <li>d</li>
          <li>e</li>
          <li>f</li>
          <li>g</li>
          <li>h</li>
          <li>i</li>
          <li>j</li>
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
