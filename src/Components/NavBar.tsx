export const NavBar = () => {
    return (
        <>
            <nav className="navbar">
                <a href="#" className="logo">The Planets</a>
                <i className="menu-icon fas fa-bars"/>
                <ul>
                    <li><a href="#">Mercury</a></li>
                    <li><a href="#">Venus</a></li>
                    <li><a href="#">Earth</a></li>
                    <li><a href="#">Mars</a></li>
                    <li><a href="#">Jupiter</a></li>
                    <li><a href="#">Saturn</a></li>
                    <li><a href="#">Uranus</a></li>
                    <li><a href="#">Neptune</a></li>
                </ul>
            </nav>

        </>
    )
}