import React from 'react'
import './Menu.css'
import Button from '../Button'
// import ButtonLink from './components/ButtonLink';

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">

        <img className="Logo" src="https://fontmeme.com/permalink/200729/ba1cad500473f37b7abe91ec9525b356.png" alt="AluraFlix logo" />
      </a>

      <Button as="a" className="ButtonLink" href="/">
        Novo vídeo
      </Button>
    </nav>
  )
}

export default Menu