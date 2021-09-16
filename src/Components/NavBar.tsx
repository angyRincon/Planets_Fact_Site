import planets from '../Planets.json'
import {useState} from "react";
import {NavLink} from 'react-router-dom'

export const NavBar = () => {
    const [toggle, setToggle] = useState<boolean>(false)

    const handleShowNav = () => setToggle(!toggle)

    return (
        <div className="navbar">

            <a href="#" className="logo">The planets</a>

            <nav>
                <ul className={!!toggle ? "navHide" : "navShow"}>
                    {planets.map((planet, index) => {
                        return <li key={index}>
                            <NavLink activeClassName="active" to={`/planet/${planets[index].name}`}>
                                {planet.name}
                            </NavLink>
                        </li>
                    })}
                </ul>
            </nav>

            <a href="#" className="menu-icon" onClick={handleShowNav}>
                <i className="fas fa-bars"/>
            </a>
        </div>

    )
}