import { Link } from "react-router-dom";
import styled from "styled-components";

export const $Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1:first-child {
    font-size: 30px;
    text-align: center;
  }
`;

export const $Link = styled(Link)`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  align-self: flex-end;
  padding: 20px 30px;
  gap: 5px;
  font-size: 25px;
  &:hover {
    color: var(--secondary-color);
  }
`;

export const $Content = styled.div`
  h1 {
    font-size: 30px;
    text-transform: uppercase;
  }

  >div:last-child{
    font-size: 25px;

  }
  @media (min-width: 1024px) {
    display: flex;
    gap: 50px;
  }
`;

export const $Image = styled.img`
  width: 380px;
  height: 280px;
  border-radius: 10px;
  border: 5px solid var(--third-color);
  cursor: pointer;
  opacity: 100%;

  &:hover {
    border: 5px solid var(--secondary-color);
    opacity: 80%;
  }
`;
