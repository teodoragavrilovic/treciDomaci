import React from 'react'
import { Link } from 'react-router-dom';
export default function Navigacija() {
    return (
        <header className="header">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">


                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav">
                        <li className="nav-item ">
                            <Link className="nav-link" to='/kalkulator'>Kalkulator</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/kategorije'>Kategorije</Link>
                        </li>

                    </ul>
                </div>
            </nav>
        </header>
    )
}
