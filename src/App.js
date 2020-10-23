import React from 'react';
// import styled from 'styled-components';
import './App.scss';

import Container from './Components/Container/Container.js';
import Header from './Components/Header/Header.js';
import PokeList from './Components/PokeList/PokeList.js'
import PokeImage from './Components/PokeImage/PokeImage.js';
import PokeInfo from './Components/PokeInfo/PokeInfo.js';

function App() {
  return (
    <Container className="container">
      <Header className="header" title='POKEDEX' />
      <PokeImage />
      <PokeInfo name="Bulbasaur" />

      {/* <Filter className="section"  /> */}
      <PokeList className="section"  />
    </Container>
  );
}

export default App;