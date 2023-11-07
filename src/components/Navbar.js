import React from 'react'
import Link from 'next/link'
const Navbar = () => {
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
                    <li>
                        <Link className='linktag' href='/'>Home</Link>
                    </li>
                    <li>
                        <Link className='linktag' href='/about'>About Us</Link>
                    </li>
                    <li>
                        <Link className='linktag' href='/blog'>Blog</Link>
                    </li>
                    <li>
                        <Link className='linktag' href='/contact'>Contact</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar