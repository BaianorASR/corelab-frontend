import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-items: center;
  height: fit-content;
  position: relative;
  box-shadow: 0px 0px 15px -3px rgba(0, 0, 0, 0.1);
  padding: 20px;
  gap: 31px;

  ::before {
    left: 0;
    bottom: 0;
    z-index: -10;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: white;
    opacity: 0.7;
  }

  .btn-default {
    align-self: flex-end;
  }

  span {
    margin-left: 20px;
  }

  @media (min-width: 450px) {
    select {
      width: 100%;
      height: 45px;
    }
  }
`;

export const Prices = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;

  input {
    width: 100%;
    height: 31px;
  }
`;
