
import React,  { useRouter} from 'next/router'
import { useEffect, useState } from 'react'
import Image from 'next/image'
const slug = () => {
  const [blogs, setblogs] = useState([])
  useEffect(()=> {
    fetch('http://localhost:3000/api/blogs').then((a)=>{
     return a.json()
    }).then((parsed)=>{
     setblogs(parsed)
    //  console.log(parsed.length)
    })
}, [])
    const router = useRouter()
    const {slug} = router.query;
  return (
     <>

         <style jsx>
             {
                `
                  .blogpost{
                    background-color: aquamarine;
                    width: 100%;
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    min-height: 100vh;
                    padding:5px 0px;
                }
                .slug-container{
                    width:1000px;
                    display:flex;
                    padding:10px 30px;
                    flex-direction:column;
                    // min-height:100vh;
                }
                .slug-img{
                  width:100%;
                  display:flex;
                  justify-content:center;
                }
                .slug-text{
                  padding:20px;
                  width:100%;
                }
                .slug-text p{
                  text-align:justify;
                }

                .blogpost h2{
                    font-weight: bold;
                    font-size: 45px;
                    margin-bottom: 20px;
                    color:rgb(147, 130, 107);
                }
                .blogpost p{
                    font-weight: bold;
                    line-height: 2rem;
                    font-size: 18px;
                }
                .postimg{
                  border-radius:10px;
                  width:100%;
                  height:100%;
              }
              `                        
             }
         </style>
         <div className='blogpost'>
               {blogs.map((post)=>{
                return  <div className={`${post.slug === slug ? 'slug-container' : ''}`} key={post.slug}>
                              <div className={`${post.slug === slug ? 'slug-img' : ''}`}>
                                  <img src={`../${post.slug === slug ? post.img : ''}.jpg`} alt={`${post.slug === slug ? 'image' : ''}`} className={`${post.slug === slug ? 'postimg' : ''}`}/>
                              </div>
                              <div className={`${post.slug === slug ? 'slug-text' : ''}`}>
                                  <h2>{post.slug === slug ? post.title : ''}</h2>
                                  <p> {post.slug === slug ? post.content : ''}</p>
                              </div>
                        </div>
               })}
              


              
              {/* { blogs.map((post)=>{
                return <div key={post.slug}>
                  <h2>{post.slug === slug ? post.title : ''}</h2>
                  <p> {post.slug === slug ? post.content : ''}</p>
                </div>
                
              })} */}
         </div>
     </>
  )
}

export default slug;