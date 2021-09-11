import planets from '../Planets.json'

export const NavBar = () => {
    return (
        <div className="navbar">

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

        </div>
    )
}