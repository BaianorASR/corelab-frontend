import styled from 'styled-components';

export const Container = styled.section`
  min-height: 100vh;
  margin-top: 60px;
`;

export const CardsContainer = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 34px;

  li {
    list-style: none;
  }
`;
