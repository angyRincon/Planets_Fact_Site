import planets from '../Planets.json'
import {useEffect} from "react";
import {Link} from 'react-router-dom'

export const NavBar = () => {

    const handleShowNav = () => {
        let menuList = document.getElementById("menuList")
        if (menuList.style.maxHeight === "0px") {
            menuList.style.maxHeight = "400px"
        } else {
            menuList.style.maxHeight = "0px"
        }
    }

    useEffect(() => {
        let menuList = document.getElementById("menuList")
        menuList.style.maxHeight = "400px"
    }, [])

    return (
        <div className="navbar">

            <a href="#" className="logo">The planets</a>

            <nav>
                <ul id="menuList">
                    {planets.map((planet, index) => {
                        return <li key={index}>
                            <Link className={planets[index].name === "earth" ? "active" : ""}
                                  to={`/planet/${planets[index].name}`}>
                                {planet.name}
                            </Link>
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