import Link from 'next/link';
import { useState } from 'react';

export default function Home(props) {
  const [blogs, setblogs] = useState(props.allblogs)

  return (
    <>
      <div className={`homecontainer`}>
        <div className="blog-heading">
          <div className="blog-title">
            <h1>Coder Hunt</h1>
            <p style={{fontWeight:'bold', fontSize:'20px'}}>latest blog is here</p>
          </div>
        </div>
        <div className="blog-container">
          {blogs.map((blogpost) => {
            return <Link href={`blogpost/${blogpost.slug}`} className="blog-item linktag" key={blogpost.slug}>
              <div className="blog-img">
                <img src={`/${blogpost.img}.jpg`} alt="img" className='imgtag' />
              </div>
              <div className="blog-text">
                <h2> {blogpost.title} </h2>
                <p style={{ textAlign: 'justify' }}>{blogpost.content.substr(0, 250)}....Read more </p>
              </div>
            </Link>
          })}
        </div>
         
         <Link className='readmorelink' href="/blog" ><p style={{textAlign:'center', fontWeight:'700', fontSize:'18px' , color:'black' , marginTop:'20px'}}>Click here to read more blogs..</p></Link>
      </div>
    </>
  )
}


export async function getServerSideProps(context) {
    const data = await fetch('http://localhost:3000/api/blogs');
    const allblogs = await data.json()
   
      const homeblog = allblogs.slice(0 , 3)
  return {props: { allblogs: homeblog }};

}
