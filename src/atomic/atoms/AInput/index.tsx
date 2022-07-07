import { useFormContext } from 'react-hook-form';

import * as S from './styles';

type AInputProps = {
  name: string;
  type?: string;
};

export const AInput: React.FC<AInputProps> = ({ name, type = 'text' }) => {
  const { register } = useFormContext();

  return <S.Input type={type} id="input" {...register(name)} />;
};
