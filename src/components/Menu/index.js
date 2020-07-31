import React from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';
import Button from '../Button';
// import ButtonLink from './components/ButtonLink';

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img
          className="Logo"
          src="https://fontmeme.com/permalink/200729/ba1cad500473f37b7abe91ec9525b356.png"
          alt="AluraFlix logo"
        />
      </Link>
      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo vídeo
      </Button>
    </nav>
  );
}

export default Menu;
