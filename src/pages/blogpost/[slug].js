
// import React, { useRouter } from 'next/router'
import React from 'react'
const slug = (props) => {

  const {data} = props;

    // const router = useRouter()
  // const [blogs, setblogs] = useState(props.data)
  // useEffect(() => {
  //   if (!router.isReady) return;
  //   const { slug } = router.query;
  //   fetch(`http://localhost:3000/api/getblog?slug=${slug}`).then((a) => {
  //     return a.json()
  //   }).then((parsed) => {
  //     setblogs(parsed)
  //   })
  // }, [router.isReady])

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
        <div className='slug-container'>
          <div className='slug-img'>
            <img src={`../${data.img}.jpg`} alt='image' className='postimg' />
          </div>
          <div className='slug-text'>
            <h2>{data.title}</h2>
            <p>{data.content}</p>
          </div>
        </div>
      </div>
    </>
  )
}


// export async function getServerSideProps(context) {
//   // console.log(context.query.slug)
//   const {slug} = context.query;
//   const res = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`);
//   const data = await res.json();
//   // console.log(data)
 

//   // Pass data to the page via props
//   return { props: {data} }
// }
export async function getServerSideProps(context) {
  const { slug } = context.query;
  try {
    const res = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`);
    if (!res.ok) {
      throw new Error(`API request failed with status: ${res.status}`);
    }
    const data = await res.json();
    return { props: { data } };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { props: { data: null } }; // Handle the error as needed
  }
}


export default slug;