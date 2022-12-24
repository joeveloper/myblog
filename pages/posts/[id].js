import Head from "next/head";

export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();

    const paths = data.map(post => {
        return {
            params: {id: post.id.toString(),
    }
        }
    })
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json();

    return {
        props: { post: data }
    }
}

const PostDetails = ({post}) => {
    

    return ( 
        <>
        <Head>
        <title>English Blog in France | {post.title}</title>
      </Head>
        <div>
            <div className="content">
            <h1>{post.title}</h1>
            <img src="http://placecorgi.com/200" alt="Good corgi doggo" className="img--align-left" />
            <p>{post.body}</p>
            <p>Author: Adeyinka Olatunji</p>
            <p><span style={{color: "red"}}>Date</span> 1/1/2023</p>
            </div>
            
        </div>
        </>
     );
}
 
export default PostDetails;