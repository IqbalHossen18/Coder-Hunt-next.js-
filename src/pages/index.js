
import { useState } from 'react';
import Link from 'next/link';
export default function Home(props) {
  const [blogs, setblogs] = useState(props.data)

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
