import React from "react";
import SearchBar from '../SearchBar' 
import { Link } from "react-router-dom";


const Nav = ({onSearch}) => {
    return (
        <div>
            <Link to={'/home'}>
            <button>Home</button>
            </Link>
            <Link to ={'/About'}>
            <button>About</button>
            </Link>
            <Link to ={'/Favorites'}>
            <button>Favorites</button>
            </Link>

            <SearchBar onSearch={onSearch} />
        </div>
    )
}

export default Nav;