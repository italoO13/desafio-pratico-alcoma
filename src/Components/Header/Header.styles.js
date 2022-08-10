import styled from 'styled-components';

export const Container = styled.div`
  background-color: #82B3AD;
  display:flex;
  padding: 10px 50px;
  align-items: center;
  justify-content:space-between;
  border-bottom: 1px solid rgba(0,0,0,0.2);
  height:90px;
`;

export const Wrapper = styled.div`
  width: 150px;
  img {
    width:100%;
  }
`;

export const Nav = styled.nav`
  color: #FFF;
  flex-grow:1;
  display:flex;
  align-items:center;
  justify-content:center;
  h1{
    font-size: 2.3rem;
    font-weight:600;
    letter-spacing: 1.5px;
  }
`;
