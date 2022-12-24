import styles from '../../styles/Posts.module.css';
import Link from 'next/link';
import { fetcher } from '../../lib/api';

export const getStaticProps = async () => {
    // const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    // const res = await fetch('http://localhost:1337/api/posts' || 'http://0.0.0.0:1337/api/posts');
    // const data = await res.json(); 
    // return {
    //     props: { posts: data }
    // } 

    const API_URL = await `${process.env.NEXT_PUBLIC_STRAPI_URL}` //|| 'http://127.0.0.1:1337/posts';

    const res = await fetcher(API_URL)
    const data = JSON.stringify(res)
    
    return {
        props: { posts: data }
        } 
}

const Posts = ({posts}) => {
    
    return ( 
        <div className='content'>
            <h1 className={styles.center}>All Articles</h1>
            <div className='singlepost'>
            {posts.map(post => 
                (<Link href={`/posts/${post.id}`} className={styles.single} key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                    <p><span style={{color: "red"}}>Author:</span> Adeyinka Olatunji</p>
                    <p><span style={{color: "red"}}>Date</span> 1/1/2023</p>
                </Link>
                ))}
            </div>
        </div>
     );
}
 
export default Posts;