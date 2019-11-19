import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeaderContainer = styled.div`
  min-height: 40%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  h1 {
    color: #fff;
    font-size: 56px;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 30%;
  height: 40px;

  input {
    width: 100%;
    height: 100%;
    padding: 20px 15px;
  }
`;

export const CitiesContainer = styled.div`
  width: 40%;
  border-top: 1px solid #fff;
  padding: 20px 50px;

  h2 {
    color: #fff;
    font-size: 36px;
  }
`;

export const TableContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  table {
    tr,
    th,
    td {
      text-align: center;
    }
  }
`;
