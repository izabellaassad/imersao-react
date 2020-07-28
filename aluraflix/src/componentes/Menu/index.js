import React from 'react'
import Logo from '../../assests/img/logo.png'
import './Menu.css'
import ButtonLink from './componentes/ButtonLink'

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt='AluraFlix'></img>
            </a>
            <ButtonLink className='ButtonLink' href="/">
                oie
            </ButtonLink>
        </nav>
    )

}

export default Menu 