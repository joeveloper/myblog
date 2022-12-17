import Link from "next/link";



const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <Link href={"/"}>EBiF</Link>
            </div>
            <Link href="/">Home</Link>      
            <Link href="/people">Blog</Link>
            <Link href="/about">Donate</Link> 
        </nav>
     );
}
 
export default Navbar;