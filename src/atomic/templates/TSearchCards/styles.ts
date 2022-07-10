import styled from 'styled-components';

export const Container = styled.section`
  margin-top: 60px;
  min-height: 100vh;

  h2 {
    text-align: center;
    font-size: 20px;
    line-height: 24pxs;
    margin-bottom: 12px;
  }
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
