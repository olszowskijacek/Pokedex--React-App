import React from 'react';
import './App.scss';

import Container from './Components/Container/Container.js'
import Header from './Components/Header/Header.js';

function App() {
  return (
    <Container className='App'>
      <Header title='POKEDEX'/>
    </Container>
  );
}

export default App;
