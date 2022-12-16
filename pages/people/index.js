import styles from '../../styles/People.module.css'
import Link from 'next/link';

export const getStaticProps = async () =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

   
    
    return {
        props: { persons: data }
    }
    
}


const People = ({persons}) => {
    
    return ( 
        <div>
            <h1>All People</h1>
            {persons.map(person => 
                (<Link href={`/people/${person.id}`} className={styles.single} key={person.id}>
                    <h3>{person.name}</h3>
                </Link>
                ))}
        </div>
     );
}
 
export default People;