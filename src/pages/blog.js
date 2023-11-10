import React, { useState }  from 'react'
import Link from 'next/link';
import fs from 'fs';

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



export default Blog