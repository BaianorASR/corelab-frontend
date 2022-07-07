import { ABackButton } from 'atomic/atoms/ABackButton';
import { OFilterForm } from 'atomic/organisms/OFilterForm';
import { NextPage } from 'next';

const filter_vehicles: NextPage = () => {
  return (
    <div>
      <ABackButton />
      <OFilterForm />
    </div>
  );
};

export default filter_vehicles;
