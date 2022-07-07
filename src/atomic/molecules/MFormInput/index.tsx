import { AInput } from 'atomic/atoms/AInput';
import { ALabel } from 'atomic/atoms/ALabel';
import React from 'react';

type MFormInputProps = {
  label: string;
  name: string;
};

export const MFormInput: React.FC<MFormInputProps> = ({ label, name }) => {
  return (
    <ALabel label={label}>
      <AInput name={name} />
    </ALabel>
  );
};
