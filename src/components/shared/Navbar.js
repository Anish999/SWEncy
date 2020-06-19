import React from 'react';
import { Menu, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <Menu inverted size='massive'>
      <Container>
        <Link to='/'>
          {' '}
          <Menu.Item name='SWEncy' />
        </Link>
        <Link to='/people'>
          {' '}
          <Menu.Item name='people' />
        </Link>
        <Link to='/planets'>
          {' '}
          <Menu.Item name='planets' />
        </Link>
      </Container>
    </Menu>
  );
}
