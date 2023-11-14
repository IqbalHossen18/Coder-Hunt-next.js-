import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import InfiniteScroll from 'react-infinite-scroll-component';
import fs from 'fs';

const Blog = (props) => {
  const {allcount } = props;
  const [blogs, setblogs] = useState(props.allblogs)
  const [count, setcount] = useState(null)


      const fetchMoreData = async () => {
        let data = await fetch(`http://localhost:3000/api/blogs?count=${count + 5}`);
        console.log(data.length)
        setcount(count + 5);
        
        let res = await data.json();
        setblogs([...blogs, ...res]);
        console.log(blogs.length)
      };

  
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
        <InfiniteScroll
          style={{
            width:'100%',
            display:'flex',
            flexDirection:'column',
            justifyContent: 'center',
            alignItems:'center',
            gap:"20px",
            paddingLeft:'10%',
            paddingRight:'10%'
        }}
          dataLength={blogs.length}
          next={fetchMoreData}
          hasMore={blogs.length <= allcount}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b> <Link className='linktag' id="infinitelink" href='/contact'>Yay! Contact us for future blogs like this</Link> </b>
            </p>
          }
        >
          {blogs.map((blogpost, index) => {
            return (
              <Link href={`blogpost/${blogpost.slug}`} className="blog-item  linktag" key={index}>
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

        </InfiniteScroll>
      </div>
    </>
  )
}

 //api call for blogs by SSG(ServerSideRenderaing)

export async function getServerSideProps(context) {
  let data = await fs.promises.readdir('blogdata');
  let allcount = data.length;
  let allblogs = [];
  let myfile;
    for(let i = 0; i < 5 ; i++){
       const item = data[i]
       myfile = await fs.promises.readFile(('blogdata/' +item) , 'utf-8');
       allblogs.push(JSON.parse(myfile));
    }
  return { props: { allblogs, allcount } };
}



export default Blog