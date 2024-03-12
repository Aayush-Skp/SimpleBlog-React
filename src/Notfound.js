import { Link } from "react-router-dom/cjs/react-router-dom";

const NotFound = () => {
    return ( 
       <div className="not-found">
        <h2>sorry</h2>
        <p>That page can;t be found</p>
        <Link to="/">Back to Homepage</Link>
       </div> 
     );
}
 
export default NotFound;