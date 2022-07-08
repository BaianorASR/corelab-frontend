import { ALabel } from 'atomic/atoms/ALabel';
import { FC } from 'react';
import { useFormContext } from 'react-hook-form';

type MFormSelectProps = {
  label: string;
  options: string[];
  name?: string;
};

export const MFormSelect: FC<MFormSelectProps> = ({
  options,
  label,
  name = 'no_provider',
}) => {
  const { register } = useFormContext();
  return (
    <ALabel label={label}>
      <select {...register(name)}>
        {options.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </ALabel>
  );
};
