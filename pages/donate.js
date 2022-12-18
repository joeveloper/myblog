import styles from "../styles/Posts.module.css"
import Head from "next/head";

const donate = () => {
    return ( 
      <>
        <Head>
        <title>English Blog in France | Donate</title>
      </Head>
        <div className="content">
            <h1 className={styles.center}>Donate to support this mission</h1>
            <p>loremLorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse odio leo, viverra nec enim nec, egestas scelerisque est. Maecenas nec metus sapien. Pellentesque ac ju</p>
            <p>loremLorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse odio leo, viverra nec enim nec, egestas scelerisque est. Maecenas nec metus sapien. Pellentesque ac ju</p>
        </div>
        </>
     );
}
 
export default donate;