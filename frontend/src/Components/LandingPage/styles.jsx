import styled from "styled-components";

export const $Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 4rem;
  padding: 10px;
  
  h1 {
    letter-spacing: 5px;
    font-size: 35px;
    font-style: italic;
  }

  h4 {
    max-width: 800px;
    font-size: 23px;
  }
`;

export const $Button = styled.button`
  padding: 15px 25px;
  font-size: 20px;
  border-radius: 25px;
  border: 5px solid var(--secondary-color);
  background-color: var(--third-color);
  &:hover {
    background-color: var(--secondary-color);
    color: var(--third-color);
    border: 5px solid var(--third-color);
  }
`;
