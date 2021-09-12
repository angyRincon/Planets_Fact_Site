import planets from '../Planets.json'
import {useEffect} from "react";

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
                    {planets.map(planet => (
                        <li key={planet.name}>
                            <a href="#">
                                {planet.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>

            <a href="#" className="menu-icon" onClick={handleShowNav}>
                <i className="fas fa-bars"/>
            </a>

        </div>
        /*<div className="navbar">

            <a href="#" className="logo">The Planets</a>

            <nav>
                <ul>
                    {planets.map((planet, index) => (
                        <li key={index}>
                            <a href="#">{planet.name}</a>
                        </li>
                    ))}
                </ul>
            </nav>

            <a href="#" className="menu-icon">
                <li className="fas fa-bars"/>
            </a>

        </div>*/
    )
}