
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>English Blog in France | Home</title>
      </Head>
      <div>
      
        <h1 className={styles.title}>English Blog in France</h1>
        <p className={styles.text}>loremLorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse odio leo, viverra nec enim nec, egestas scelerisque est. Maecenas nec metus sapien. Pellentesque ac ju</p>
        <p className={styles.text}>loremLorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse odio leo, viverra nec enim nec, egestas scelerisque est. Maecenas nec metus sapien. Pellentesque ac ju</p>      
        <Link legacyBehavior href="/people">
          <a className={styles.btn}>Blog Articles</a>
        </Link>
    </div>
    </>

      
  )
}
