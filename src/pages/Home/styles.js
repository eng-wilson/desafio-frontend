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
  width: 20%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: transparent;
  background-color: #fff;
  padding: 2px 10px;

  input {
    display: flex;
    width: 100%;
    padding-top: 10;
    padding-right: 10;
    padding-bottom: 10;
    padding-left: 0;
    border: 0;
    background-color: #fff;
    color: #424242;
    height: 40px;
    font-size: 18px;
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
