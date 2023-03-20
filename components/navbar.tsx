import Link from "next/link";

function Navbar() {
  return (
    <ul>
      <li>
        <Link href="/home">Home</Link>
      </li>
      <li>
        <Link href="/about">About Us</Link>
      </li>
      <li>
        <Link href="/service">Service</Link>
      </li>
    </ul>
  );
}

export default Navbar;
