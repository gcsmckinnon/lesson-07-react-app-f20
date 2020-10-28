import React, { useEffect, useState } from 'react';
import Header from '../shared/Header';
import { Container } from 'react-bootstrap';
import Axios from 'axios';

import List from './List';
import Search from './Search';

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:4000/characters')
    .then(({ data }) => {setCharacters(data)});
  }, []);

  return (
    <>
      {console.log(characters)}
      <Header title="Marvel Characters"/>

      <Container>
        <Search setCharacters={setCharacters}/>
        <List characters={characters} setCharacters={characters}/>
      </Container>
    </>
  );
}
 
export default Characters;