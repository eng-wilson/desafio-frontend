import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 64px;
`;

export const SubTitle = styled.h1`
  color: #fff;
  font-size: 36px;
`;

export const HeaderContainer = styled.div`
  min-height: 40%;
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 70%;
  height: 40px;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  padding: 20px 15px;
`;

export const CitiesContainer = styled.div`
  width: 30%;

  border-top: 1px solid #fff;

  padding: 20px 50px;
`;
