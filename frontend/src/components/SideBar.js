import React from 'react'

import { Link } from 'react-router-dom'

const SideBar = () => {
    return (
        <nav>
            <ul className="list-group">
                <li className="list-group-item">
                    <Link to='/'>Home</Link>
                </li>
                <li className="list-group-item">
                    <Link to='/movies'>Movies</Link>
                </li>
                <li className="list-group-item">
                    <Link to='/by-category'>Categories</Link>
                </li>
                <li className="list-group-item">
                    <Link to='/admin'>Manage Catalouge</Link>  
                </li>
            </ul>
        </nav>
    )
}

export default SideBar
