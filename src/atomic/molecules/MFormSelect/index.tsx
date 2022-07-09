/* eslint-disable jsx-a11y/control-has-associated-label */
import { ALabel } from 'atomic/atoms/ALabel';
import { FC } from 'react';
import { useFormContext } from 'react-hook-form';

import * as S from './styles';

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
      <S.Select {...register(name)}>
        <option value="" />
        {options.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </S.Select>
    </ALabel>
  );
};
