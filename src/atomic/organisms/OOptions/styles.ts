import { MagnifyingGlass, Sliders } from 'phosphor-react';
import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 34px auto;
  gap: 5px;

  div {
    position: absolute;
    left: 2rem;
  }
`;

export const InputText = styled.input`
  width: 100%;
  height: 45px;
  border: none;
  border-radius: 100px;
  padding: 0 10px;
  padding-left: 3rem;
  font-size: 1rem;
  background: ${({ theme }) => theme.primary};
  filter: opacity(0.3);

  &::placeholder {
    font-size: 1rem;
    color: ${({ theme }) => theme.text};
  }

  &:focus {
    outline: 2px solid ${({ theme }) => theme.primary};
    outline-offset: 2px;
  }
`;

export const SearchIcon = styled(MagnifyingGlass)`
  position: absolute;
  left: 2rem;
  color: ${({ theme }) => theme.text};
`;

export const FilterIcon = styled(Sliders)`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.text};
  transform: rotate(-90deg);
`;
