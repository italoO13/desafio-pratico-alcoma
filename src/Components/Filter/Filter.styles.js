import styled from 'styled-components';

export const Container = styled.div`
  font-size: 1.2rem;
  width:600px;
  display:flex;
  justify-content:center;
  align-items:center;
  label {
    display:flex;
    flex-direction:column;
    margin:5px;
    margin-bottom:0;
  }
  select {
    padding: 7px 15px;
    font-size:1rem;
  }
  input {
    padding:5px 15px;
  }
`;

export default Container;
