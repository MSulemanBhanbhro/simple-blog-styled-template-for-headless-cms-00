
import Link from "next/link";

export default function Navlink() {
  return (

    // TODO: If you activate 3 or more social icons, make sure to update the Navbar styling accordingly.

    // Social Icons
    <nav className="flex gap-2 py-4">
      
     <ul className="flex items-center gap-12 text-xl">
      <li ><Link href={'/'}>Home</Link></li>
      <li><Link href={'/'}>About us</Link></li>
      <li><Link href={'/'}>Contact us</Link></li>
     </ul>
    </nav>
  );
}
