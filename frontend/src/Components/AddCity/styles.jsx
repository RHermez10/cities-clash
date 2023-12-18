import styled from "styled-components";

export const $Overlay = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  background: linear-gradient(135.09deg, rgb(5 38 70) 4.09%, rgb(0 0 0) 100%);
  backdrop-filter: blur(50px);
`;

export const $PopUp = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #0e1330;
  color: white;
  z-index: 1000;
  width: 400px;
  height: 550px;
  max-width: 90%;
  border-radius: 8px;
  align-items: center;
  border: 10px solid #ff55e9;
  padding: 10px;

  h1 {
    font-size: 25px;
    margin: 0px 0px 30px 0px;
  }
`;

export const $Form = styled.form`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  gap: 15px;
  input {
    font-size: 16px;
    width: 100%;
    outline: none;
    padding: 13px 20px;
    border-radius: 5px;
  }
`;

export const $Button = styled.button`
  align-self: flex-end;
  padding: 13px 25px;
  background-color: var(--secondary-color);
  color: var(--third-color);
  border: none;
  font-size: 18px;
  opacity: ${({ disabled }) => disabled && ".3"};
`;
