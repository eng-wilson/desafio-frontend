import React, { Component } from "react";
import { MdSearch } from "react-icons/md";

import api from "../../services/api";

import {
  Container,
  HeaderContainer,
  Title,
  SearchContainer,
  SearchInput,
  CitiesContainer,
  SubTitle
} from "./styles";

export default class Home extends Component {
  componentDidMount() {
    this.handleRequest();
  }

  async handleRequest() {
    const response = await api.get(`forecastrss?location=aracaju&format=json`);

    console.log(response);
  }

  render() {
    return (
      <>
        <Container>
          <HeaderContainer>
            <Title>Previsão do tempo</Title>

            <SearchContainer>
              <SearchInput
                type="text"
                name=""
                id=""
                placeholder="Insira aqui o nome da cidade"
              />
              <MdSearch />
            </SearchContainer>
          </HeaderContainer>

          <CitiesContainer>
            <SubTitle>Capitais</SubTitle>
            <div></div>
          </CitiesContainer>
        </Container>
      </>
    );
  }
}
