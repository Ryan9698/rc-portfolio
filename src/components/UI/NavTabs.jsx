import { Link } from 'react-router-dom';

function NavTabs(){
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    );
}

export default NavTabs;