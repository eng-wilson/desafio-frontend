import React, { Component } from "react";

import api from "../../services/api";

import { Container, Title, Search } from "./styles";

export default class Home extends Component {
  componentDidMount() {
    api.get(`forecastrss?location=aracaju,br`);
  }

  render() {
    return (
      <>
        <Container>
          <Title>Previsão do tempo</Title>
          <Search type="text" name="" id="" />
          <div className="">
            <h2>Capitais</h2>
            <div></div>
          </div>
        </Container>
      </>
    );
  }
}
