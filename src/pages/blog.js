import React from 'react'
import { useEffect , useState} from 'react';
import Link from 'next/link';
const blog = () => {
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
              <style jsx>
                   {`
                       .blog-container{
                        padding:30px 50px;

                       }
                   `}
              </style>
          <div className="blog-container">
             {blogs.map((blogpost)=>{
              return  <div className="blog-item" key={blogpost.slug}>
              <div className="blog-img">
           <img src={`${blogpost.img}.jpg`} alt="img" className='imgtag'/>
              </div>
              <div className="blog-text">
                <h2><Link className='linktag' href={`blogpost/${blogpost.slug}`}>{blogpost.title}</Link></h2>
                <p><Link className='linktag' href='#'>{blogpost.content.substr(0, 150)}.....Read more</Link></p>
              </div>
            </div>
             })}
      
        </div>
          </>
  )
}

export default blog