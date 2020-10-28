import Axios from 'axios';
import React, { useState } from 'react';
import { Button, Col, Form } from 'react-bootstrap';

const Search = ({ setCharacters }) => {
  const [searchTerm, setSearch] = useState(null);

  const searchDB = () => {
    Axios.get(`http://localhost:4000/characters/search/${searchTerm}`)
    .then(({ data }) => setCharacters(data));
  };

  return (
    <Form className="my-3">
      <Form.Row>
        <Col>
          <Form.Control
            onChange={({ target: { value } }) => setSearch(value)}
            placeholder="Find Marvel characters..."
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                setSearch(e.target.value);
                e.preventDefault();
              }
            }}
          />
        </Col>
        <Col>
          <Button onClick={searchDB}>Search</Button>
        </Col>
      </Form.Row>
    </Form>
  );
}
 
export default Search;