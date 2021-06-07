import { Link } from 'gatsby'
import React from 'react'

export default function Navbar() {
    return (
        <nav>
           <h1>Learn</h1>
           <div className="links">

                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/courses">Courses</Link>

            </div> 
        </nav>
    )
}