import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
const Navbar = () => {

    let pathname = usePathname()

    return (
        <>
            <nav id='navbar' className="navbar sticky-top navbar-expand-lg bg-dark navbar-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" href="/">Coder Hunt</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${ pathname === '/' ? 'active':''}`} aria-current="page" href="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${ pathname === '/about' ? 'active':''}`} href="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${ pathname === '/blog' ? 'active':''}`} href="/blog">Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${ pathname === '/contact' ? 'active':''}`} href="/contact">Contact</Link>
                            </li>
                            
                        </ul>
                       
                    </div>
                </div>
            </nav>
            {/* <style jsx>
                {`
           
                            nav {
                                background-color: bisque;
                                width:100%;
                                display: flex;
                                padding-top:12px;
                                justify-content: center;
                                align-items: center;
                                height: 65px;
                                border-bottom: 1px solid rgb(204, 202, 202);
                            }
                            nav ul{
                                display: flex;
                                padding:5px 15px;
                                justify-content: center;
                                align-items: center;
                            }
                            nav ul li{
                                display: flex;
                                justify-content: center;
                                padding:8px 20px;
                                background-color: rgb(255, 255, 255);
                                margin:0px 20px;
                                border-radius: 10px;
                                transition: all 0.3s;
                            }
                            nav ul li:hover{
                                background-color: antiquewhite;
                                border:2px solid rgb(241, 148, 26);
                            }
                            
          `}
            </style>
            <nav>
                <ul>
                    <Link className={`linktag ${pathname === '/' ? 'active' : ''}`} href='/'>
                        <li>Home</li>
                    </Link>
                    <Link className={`linktag ${pathname === '/about' ? 'active' : ''}`} href='/about'>
                        <li>About Us</li>
                    </Link>
                    <Link className={`linktag ${pathname === '/blog' ? 'active' : ''}`} href='/blog'>
                        <li>Blog</li>
                    </Link>
                    <Link className={`linktag ${pathname === '/contact' ? 'active' : ''}`} href='/contact'>
                        <li>Contact</li>
                    </Link>
                </ul>
            </nav> */}
        </>
    )
}

export default Navbar