import styled from 'styled-components';

export const Container = styled.div`
  padding:30px;
  background-color: #fff;
  color: black;
  display:flex;
  flex-direction:column;
  align-items:center;

  button {
    padding: 15px 40px;
    background-color: #ef6a35;
    border-radius:5px;
    border: 1px transparent;
    color: #fff;
    font-size:1rem;
    cursor: pointer;
    box-shadow: 5px 5px 5px rgba(0,0,0,0.25)
  }
`;

export const Title = styled.h1`
  font-size:2rem;
  margin-bottom:30px;
`;

export const Result = styled.div`
  margin:40px;
  width:100%;
  max-width:1200px;

  .notSearch {
    display:flex;
    flex-direction:column;
    align-items:center;
    margin:auto;
    h1 {
      font-size:1.5rem;
    }
    img{
      width:250px;
      margin:auto;
    }
  }

  .yesSearch{
    display:flex;
    flex-direction:column;
    align-items:center;
    h2 {
      font-size:2rem;
      margin:10px;
    }
    h1 {
      font-size:3rem;
      color:#ef6a35;
    }
  }

`;
