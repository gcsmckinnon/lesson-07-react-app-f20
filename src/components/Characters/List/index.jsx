import React, { useState, useEffect } from 'react';
import { ListGroup, Row, Col, Image } from 'react-bootstrap';
import Axios from 'axios';
import Show from './Show';

const List = ({characters, setCharacters}) => {
  const [character, setCharacter] = useState();
  const [characterId, setCharacterId] = useState(null);

  useEffect(() => {
    if (characterId) {
      Axios.get(`http://localhost:4000/characters/${characterId}`)
      .then(({ data }) => {
        if (data) setCharacter(data);
      });
    }
  }, [characterId]);

  return (
    <Row>
      <Col>
        <ListGroup>
          {characters.map((character, i) => (
            <ListGroup.Item key={i}>
              <Row>
                <Col>
                  <Image
                    src={character.thumbnail} alt={`Image of ${character.name}`} thumbnail
                    width={100}
                    onClick={() => setCharacterId(character.id)}
                  />
                </Col>

                <Col>
                  <h3>{character.name}</h3>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Col>

      <Col style={{ position: 'relative' }}>
        {character ? (
          <Show character={character}/>
        ) : null}
      </Col>
    </Row>
  );
}
 
export default List;