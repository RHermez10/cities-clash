import styled from "styled-components"

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
  text-align: center;
  display: flex;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
   background-color: #0e1330;
  color: var(--third-color);
  z-index: 1000;
  width: 800px;
  max-width: 90%;
  border-radius: 8px;
  flex-direction: column;
  align-items: center;
  border: 10px solid var(--secondary-color);
`;

export const $Icon = styled.div`
  align-self: flex-end;
  padding: 5px;
  cursor: pointer;
`;