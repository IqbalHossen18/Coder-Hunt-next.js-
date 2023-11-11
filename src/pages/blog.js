import React, { useState }  from 'react'
import Link from 'next/link';
// import fs from 'fs';

const Blog = (props) => {
  const [blogs, setblogs] = useState(props.allblogs)
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
        {blogs.map((blogpost) => {
          return (
            <Link href={`blogpost/${blogpost.slug}`} className="blog-item  linktag" key={blogpost.slug}>
            <div className="blog-img">
              <img src={`/${blogpost.img}.jpg`} alt="img" className='imgtag' />
            </div>
            <div className="blog-text">
              <h2>{blogpost.title}</h2>
              <p>{blogpost.content.substr(0, 150)}.......Read more</p>
            </div>
          </Link>
          )
        })}

      </div>
    </>
  )
}

 //api call for blogs by SSG(ServerSideRenderaing)

export async function getServerSideProps(context) {
  let data = await fetch('http://localhost:3000/api/blogs');
  let allblogs = await data.json()

  return { props: { allblogs } };
}



export default Blog