import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-items: center;
  height: fit-content;
  margin: auto 40px;
  position: relative;
  box-shadow: 0px 0px 15px -3px rgba(0, 0, 0, 0.1);

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

  button {
    margin: 42px 0 42px;
    width: fit-content;
    align-self: flex-end;
    border-radius: 9999px;
  }

  span {
    margin-left: 20px;
  }

  label {
    width: 100%;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 21px;
  align-items: center;
  justify-content: center;
  margin: 0 21px;
  margin-top: 58px;

  div {
    display: flex;

    label {
      display: flex;
      align-items: center;

      span {
        align-self: flex-start;
      }

      input {
        width: 90%;
      }
    }
  }
`;
