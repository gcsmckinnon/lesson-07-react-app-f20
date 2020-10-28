import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Header from '../Header';

const Layout = ({title, children}) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <>
      <Header title={title}/>

      <Container className="mt-5">
        {children}
      </Container>
    </>
  );
};
 
export default Layout;