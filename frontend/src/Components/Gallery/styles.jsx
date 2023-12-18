import styled from "styled-components";

export const $Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  div {
    align-self: flex-end;
    padding: 30px 20px;
  }

  svg {
    color: var(--third-color);
    cursor: pointer;
    margin: 10px;
    &:hover {
      color: #ff55e9;
    }
  }
`;

export const $Text = styled.h1`
  max-width: 600px;
  text-align: center;
  margin: auto;
`;

export const $Gallery = styled.div`
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 350px);
  justify-content: center;
  grid-gap: 40px;

  img {
    border: 5px solid var(--secondary-color);
    width: 350px;
    height: 250px;
  }

  h3 {
    font-size: 22px;
    text-transform: uppercase;
    font-style: italic;
    margin: 10px 0px;
  }
`;

export const $IconContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  svg {
    cursor: pointer;
    &:hover {
      color: var(--secondary-color);
    }
  }
`;
