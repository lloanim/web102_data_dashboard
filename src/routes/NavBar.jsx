import { Outlet, Link } from "react-router"


function NavBar() {
    return (
        <div className="layout">
            <aside className="sidebar">
                <div className="title">Pokémon Explore</div>

                <nav className="nav-bar">
                    <Link to="/">Dashboard</Link>
                    <Link to="/About">About</Link>
                </nav>
            </aside>
            
            <main className="content">
                <Outlet />
            </main>
            
        </div>
    )
}

export default NavBar