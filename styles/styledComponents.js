import styled from "styled-components";

export const Grid = styled.article`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 80%;
`;

export const Title = styled.h1`
  font-size: 8em;
`

export const PageLayout = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  overflow
  width: 100vw;
`;

export const CardWrapper = styled.div`
  background-color: gray;
  border: 1px solid black;
  border-radius: 0.4em;
  display: flex;
  flex-direction: column;
  height: 14em;
  margin-bottom: 1em;
  padding: 1em;
  width:12em;
`