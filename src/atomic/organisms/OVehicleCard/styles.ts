import styled from 'styled-components';

export const Card = styled.div`
  width: 258px;
  height: 201px;
  padding: 8px;
  background-color: ${({ color }) => (color?.at(0) === '#' ? color : '#F04F4F')};

  .btn-cards {
    display: flex;
    justify-content: flex-end;
  }
`;

export const CardVehicleName = styled.h2`
  font-size: 1.2rem;
  font-weight: 500;
`;
