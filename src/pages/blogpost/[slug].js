
import { useRouter} from 'next/router'
import React from 'react'
import styles from '@/styles/slug.module.css'
const slug = () => {
    const router = useRouter()
    const {slug} = router.query;
  return (
     <>
         <div className={styles.blogpost}>
              <h2>{slug}</h2>
              <p></p>
         </div>
     </>
  )
}

export default slug