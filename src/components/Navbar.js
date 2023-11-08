import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
const Navbar = () => {
    const pathname = usePathname()

    return (
        <>
            <style jsx>
                {`
           
                            nav {
                                background-color: bisque;
                                width:100%;
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                height: 65px;
                                border-bottom: 1px solid rgb(204, 202, 202);
                            }
                            @media screen and (max-width: 500px) {
                                nav{
                                    display:none;
                                }
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
            </nav>
        </>
    )
}

export default Navbar