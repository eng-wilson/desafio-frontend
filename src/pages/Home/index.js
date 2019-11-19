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
  SubTitle,
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

              {/* <table>
                <tr>
                  <th>Min</th>
                  <th>Máx</th>
                </tr>
                <tr>
                  <td>Jill</td>
                  <td>Smith</td>
                  <td>50</td>
                </tr>
                <tr>
                  <td>Eve</td>
                  <td>Jackson</td>
                  <td>94</td>
                </tr>
              </table> */}
            </TableContainer>
          </CitiesContainer>
        </Container>
      </>
    );
  }
}
