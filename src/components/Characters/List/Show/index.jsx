import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Row, Image } from 'react-bootstrap';

const Show = ({character}) => {
  return (
    <Row style={{ position: 'fixed' }}>
      <Col>
        <Image src={character.thumbnail} thumbnail/>
      </Col>

      <Col>
        <h2>{character.name}</h2>
        <hr/>
        <p>{character.description}</p>
      </Col>
    </Row>
  );
}
 
export default Show;