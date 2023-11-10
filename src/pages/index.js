import fs from 'fs';
import { useState } from 'react';
import Link from 'next/link';

export default function Home(props) {
  const [blogs, setblogs] = useState(props.allblogs)

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
          {blogs.map((blogpost) => {
            return <div className="blog-item" key={blogpost.slug}>
              <div className="blog-img">
                <img src={`${blogpost.img}.jpg`} alt="img" className='imgtag' />
              </div>
              <div className="blog-text">
                <h2> {blogpost.title} </h2>
                <p style={{ textAlign: 'justify' }}>{blogpost.content.substr(0, 250)}....Read more </p>
              </div>
            </div>
          })}
        </div>
      </div>
    </>
  )
}


export async function getStaticProps(context) {
  let data = await fs.promises.readdir('blogdata');
      // console.log(data)
      let myfile;
      let allblogs = [];
      for(let i = 0; i< data.length; i++){
        const item = data[i];
        // console.log(item)
        myfile = await fs.promises.readFile(('blogdata/' +item), 'utf-8');
        // console.log( typeof myfile)

        allblogs.push(JSON.parse(myfile))
      }
  return { props: { allblogs } };

}
