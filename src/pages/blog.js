import React from 'react'
import { useState } from 'react';
import Link from 'next/link';
const blog = (props) => {
  const [blogs, setblogs] = useState(props.data)
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
          return <Link href={`blogpost/${blogpost.slug}`} className="blog-item  linktag" key={blogpost.slug}>
            <div className="blog-img">
              <img src={`${blogpost.img}.jpg`} alt="img" className='imgtag' />
            </div>
            <div className="blog-text">
              <h2>{blogpost.title}</h2>
              <p>{blogpost.content.substr(0, 150)}.......Read more</p>
            </div>
          </Link>
        })}

      </div>
      {/* <div className="blog-container">
        {blogs.map((blogpost) => {
          return <div className='blog-item' key={blogpost.slug}>
            <Link className=' linktag' href={`blogpost/${blogpost.slug}`}>
              <div className="blog-img">
                <img src={`${blogpost.img}.jpg`} alt="img" className="imgtag" />
              </div>
              <div className="blog-text">
                   <h2>{blogpost.title}</h2>
                   <p>{blogpost.content.substr(0, 150)}.......Read more</p>
              </div>
            </Link>
          </div>
        })}

      </div> */}

    </>
  )
}

export async function getServerSideProps(context) {
  try {
    const res = await fetch('http://localhost:3000/api/blogs');
    if (!res.ok) {
      throw new Error(`API request failed with status: ${res.status}`);
    }
    const data = await res.json();
    return { props: { data } };
  } catch (error) {
    console.error('Error fetching data:', error);
    return { props: { data: [] } }; // Handle the error as needed
  }
}


export default blog