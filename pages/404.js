import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";



const NotFound = () => {
    const router = useRouter()

    useEffect(()=>{
        setTimeout(() => {
            router.push("/")
        }, 3000);
    }, [])
    
    return ( 
        <>
        <Head>
        <title>English Blog in France | 404</title>
      </Head>
        <div className="not-found">
            <h1>Oops....</h1>
            <h2>This page cannot be found</h2>
            <p>Go back to the <Link legacyBehavior href="/">homepage</Link></p>
        </div>
        </>
     );
}
 
export default NotFound;