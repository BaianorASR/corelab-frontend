import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const ShowColor = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  div {
    border-bottom-left-radius: 9999px;
    border-top-left-radius: 9999px;
  }

  input {
    border-bottom-left-radius: 9999px;
    border-top-left-radius: 9999px;
    width: 95px;
    height: 30px;
    text-align: center;
    box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.1);
    line-height: 30px;
    font-weight: 300;
    border: none;
    color: white;
    background-color: transparent;
    mix-blend-mode: exclusion;
  }
`;

export const OpenPicker = styled.button`
  background-color: ${({ theme }) => theme.primary};
  border: none;
  opacity: 0.6;
  box-shadow: 1px 1px 0px 0px rgba(0, 0, 0, 0.1);
  border-bottom-right-radius: 9999px;
  border-top-right-radius: 9999px;
  height: 30px;
  width: 95px;
  text-transform: uppercase;
`;
