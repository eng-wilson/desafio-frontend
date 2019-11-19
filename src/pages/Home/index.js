import React, { Component } from "react";
import { MdSearch } from "react-icons/md";

import api from "../../services/api";

import {
  Container,
  HeaderContainer,
  SearchContainer,
  CitiesContainer,
  TableContainer
} from "./styles";

export default class Home extends Component {
  state = {
    cities: []
  };

  componentDidMount() {
    this.handleRequest();
  }

  async handleRequest() {
    const response = await api.get(`forecastrss?location=aracaju&format=json`);

    this.setState({ cities: [...this.state.cities, response.data] });
  }

  render() {
    const { cities } = this.state;

    console.log(cities);
    return (
      <Container>
        <HeaderContainer>
          <h1>Previsão do tempo</h1>

          <SearchContainer>
            <input type="text" placeholder="Insira aqui o nome da cidade" />
            <a>
              <MdSearch size={32} />
            </a>
          </SearchContainer>
        </HeaderContainer>

        <CitiesContainer>
          <h2>Capitais</h2>
          <TableContainer>
            <table>
              <tr>
                <th>Min</th>
                <th>Máx</th>
              </tr>
              {cities.map(city => (
                <tr key={city.location.city}>
                  <td>{city.forecasts[0].low}</td>
                  <td>{city.forecasts[0].high}</td>
                  <td>{city.location.city}</td>
                </tr>
              ))}
            </table>
          </TableContainer>
        </CitiesContainer>
      </Container>
    );
  }
}
