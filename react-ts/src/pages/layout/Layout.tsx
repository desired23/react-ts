import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Layout = () => {
    const [btnLogOut, setBtnLogOut] = useState<React.ReactNode>('');
    const navigate = useNavigate()
    useEffect(()=>{
        if (localStorage.getItem("token")) {
            setBtnLogOut(<button onClick={() => {
                
                localStorage.removeItem('token')
                window.location.reload()
        
        }}>LOGOUT</button>);
        } else {
            setBtnLogOut(<button onClick={() => {
                
                navigate("/signin")
        
        }}>LOGIN</button>)

        }
    },[])
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
                    <li>{btnLogOut}</li>
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