import { Link } from "react-router-dom";

export default function NotFound() {
    return <div>Oops! Looks like something went wrong.
        
        <Link to="/">Home</Link>
    </div>;
}