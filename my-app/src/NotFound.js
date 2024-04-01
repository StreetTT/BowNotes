import { Link } from "react-router-dom/cjs/react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry (not sorry)</h2>
            <p>That page cannot be found</p>
            <Link to="/">Homepage</Link>
        </div>
     ); 
}
 
export default NotFound;