import { Link, useLocation } from "react-router-dom/cjs/react-router-dom";


const Navbar = () => {
    const loc = useLocation()
    return ( 
        <nav className="navbar">
            <h1>Notes</h1>
            <div className="links">
                <Link to="/" style={loc.pathname == "/" ? {
                    color: "white",
                    backgroundColor: "#9564bc",
                    borderRadius: "2px"
                } : {}}>Home</Link>
                <Link to="/new" style={loc.pathname == "/new" ? {
                    color: "white",
                    backgroundColor: "#9564bc",
                    borderRadius: "2px"
                } : {}}>New</Link>
                <Link to="/search" style={loc.pathname == "/search" ? {
                    color: "white",
                    backgroundColor: "#9564bc",
                    borderRadius: "2px"
                } : {}}>Search</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;