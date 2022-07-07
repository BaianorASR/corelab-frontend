import { useFormContext } from 'react-hook-form';

import * as S from './styles';

type AInputProps = {
  name: string;
};

export const AInput: React.FC<AInputProps> = ({ name }) => {
  const { register } = useFormContext();

  return <S.Input type="text" id="input" {...register(name)} />;
};
