import { Outlet, Link } from "react-router"

function NavBar() {
    return (
        <div className="layout">
            <aside className="sidebar">
                <div className="title">Pokemon Explore</div>

                <nav className="nav-bar">
                    <Link to="/">Home</Link>
                </nav>
            </aside>
            
            <main className="content">
                <Outlet />
            </main>
            
        </div>
    )
}

export default NavBar