import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: var(--body-warning-color);
  h1 {
    font-size: 3em;
    color: var(--text-color);
  }
  p {
    font-size: 1.5em;
    color: var(--text-color);
  }
  button {
    padding: 10px 20px;
    font-size: 1.5em;
    font-weight: bolder;
    background-color: var(--submit-btn-color);
    color: var(--text-color);
    border: none;
    border-radius: 10px;
    margin-top: 20px;

    &:hover {
      background-color: green;
      color: var(--text-color);
    }
  }
`;