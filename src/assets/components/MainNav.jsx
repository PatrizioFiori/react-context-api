import { NavLink } from "react-router-dom";

const arrayLinks = [
    {
        id: 1,
        path: "/",
        name: "Home"
    },
    {
        id: 2,
        path: "/post-page",
        name: "Post"
    },
]

import React from 'react'

const MainNav = () => {
    return (
        <div className="NavBar">
            <ul>
                {arrayLinks.map(item => {
                    return (
                        <li key={item.id}>
                            <NavLink className="links" to={item.path}>{item.name}</NavLink>
                        </li>
                    );
                })}

            </ul>
        </div>
    )
}

export default MainNav