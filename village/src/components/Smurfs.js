import React, { Component } from "react";
import Smurf from "./Smurf";
import styled from "styled-components";

class Smurfs extends Component {
  render() {
    return (
      <SmurfsList>
        <h1>Smurf Village</h1>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
                delete={this.props.deleteSmurf}
              />
            );
          })}
        </ul>
      </SmurfsList>
    );
  }
}

Smurf.defaultProps = {
  smurfs: []
};

const SmurfsList = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
  flex-wrap: wrap;
`;

export default Smurfs;
