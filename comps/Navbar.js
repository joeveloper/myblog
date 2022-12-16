import Link from "next/link";



const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <Link href={"/"}>PeopleList</Link>
            </div>
            <Link href="/">Home</Link>   
            <Link href="/about">About</Link>    
            <Link href="/people">People listing</Link>
        </nav>
     );
}
 
export default Navbar;