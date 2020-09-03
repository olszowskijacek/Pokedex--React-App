import React from 'react';
import styled from 'styled-components';
import './App.scss';

import Container from './Components/Container/Container.js';
import Header from './Components/Header/Header.js';
import Section from './Components/Section/Section.js'

function App() {
  return (
    <Container className="container">
      <Header className="header" title='POKEDEX'/>
      <Section className="section" name="pikatchu"/>
      <Section className="section" name="Bulbasaur"/>
      <Section className="section" name="Filter"/>
      <Section className="section" name="List"/>
    </Container>
  );
}

export default App;