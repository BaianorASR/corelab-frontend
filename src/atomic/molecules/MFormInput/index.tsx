import { AInput } from 'atomic/atoms/AInput';
import { ALabel } from 'atomic/atoms/ALabel';
import React from 'react';

type MFormInputProps = {
  label: string;
  name: string;
  type?: string;
};

export const MFormInput: React.FC<MFormInputProps> = ({ label, name, type }) => {
  return (
    <ALabel label={label}>
      <AInput name={name} type={type} />
    </ALabel>
  );
};
