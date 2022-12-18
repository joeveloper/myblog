import Link from "next/link";



const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <Link href={"/"}>EBiF</Link>
            </div>
            <div style={{paddingRight: "10px"}}>
            <Link href="/">Home</Link>      
            <Link href="/posts">Blog</Link>
            <Link href="/donate">Donate</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;