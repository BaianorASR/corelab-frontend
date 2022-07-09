import { useRouter } from 'next/router';
import { ArrowLeft } from 'phosphor-react';
import React from 'react';

export const ABackButton: React.FC<{}> = () => {
  const { push } = useRouter();

  return (
    <ArrowLeft size={32} weight="light" onClick={() => push('/')} className="btn-back" />
  );
};
