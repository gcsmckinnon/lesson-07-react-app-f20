import React from 'react';
import { Jumbotron } from 'react-bootstrap';

const Header = ({title}) => {
  return (
    <Jumbotron>
      <h1>{title}</h1>
    </Jumbotron>
  );
}
 
export default Header;