import React from 'react'
import Navbar from './Navbar'

export default function Layout({ children }) {
    return (
        <div>
            <Navbar />
            <div className="content">
                { children }
            </div>

            <footer>
                Copyright 2021
            </footer>
        </div>
    )
}
