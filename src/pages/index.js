// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// const inter = Inter({ subsets: ['latin'] })
import { useEffect, useState } from 'react';
import Link from 'next/link';
export default function Home() {
  const [blogs, setblogs] = useState([])
  useEffect(()=> {
    fetch('http://localhost:3000/api/blogs').then((a)=>{
     return a.json()
    }).then((parsed)=>{
     // console.log(parsed)
     setblogs(parsed)
    })
}, [])
  return (
    <>
      <div className={`homecontainer`}>
        <div className="blog-heading">
          <div className="blog-title">
            <h1>Coder Hunt</h1>
            <p>latest blog is here</p>
          </div>
        </div>
        <div className="blog-container">
             {blogs.map((blogpost)=>{
              return <div className="blog-item">
              <div className="blog-img">
           <img src={`${blogpost.img}.jpg`} alt="img" className='imgtag'/>
              </div>
              <div className="blog-text">
                <h2><Link className='linktag' href='#'> {blogpost.title} </Link></h2>
                <p style={{textAlign:'justify'}}><Link className='linktag' href='#'> {blogpost.content.substr(0, 250)}....Read more </Link></p>
              </div>
            </div>
             })}
        </div>
      </div>
    </>
  )
}
