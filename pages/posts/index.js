import styles from '../../styles/Posts.module.css'
import Link from 'next/link';

export const getStaticProps = async () =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();

   
    
    return {
        props: { posts: data }
    }
    
}


const Posts = ({posts}) => {
    console.log(posts)
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