import { Link } from 'react-router-dom';
import {useContext, useRef} from 'react'
import './navbar.css'
import { UserContext } from '../context/userContext';

export default function Navbar() {
    const navList = useRef()
    const onClickBurger = () => navList.current.classList.toggle('show')
    
    return (
        <nav>
            <div class="burger change p-2" onClick={onClickBurger}>
                <div class="bar1"></div>
                <div class="bar2"></div>
                <div class="bar3"></div>
            </div>

            <ul ref={navList}>
                <li><Link to="/">Accueil</Link></li>
                <li><Link to="/">Les articles</Link></li>
                
                
                
                
                <li><Link to="/login">connexion</Link></li>
                <li><Link to="/">inscription</Link></li>
                
            </ul>
        </nav>
    )
}