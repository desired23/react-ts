import React from 'react'
import { Outlet } from 'react-router-dom'
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Layout = () => {
  return (
    <div>
        <header>
            <nav>
                <ul>
                    <li className='.text-danger'>Menu</li>
                    <li>Menu</li>
                    <li>Menu</li>
                    <li>Menu</li>
                    <li>Menu</li>
                </ul>
            </nav>
        </header>
        <main>
            <Outlet />
        </main>
        <footer>
            <nav>
                <ul>
                    <li>Menu</li>
                    <li>Menu</li>
                    <li>Menu</li>
                    <li>Menu</li>
                    <li>Menu</li>
                </ul>
            </nav>
        </footer>
    </div>
)
}

export default Layout