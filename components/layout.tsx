import Navbar from "./navbar";
import Footer from "./footer"; 
import Footerni from "./footerni";
import Navbarni from "./navbarni";
import { ReactNode } from "react";

interface LayoutProps{
    children?: ReactNode
}
export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbarni />
      <main>{children}</main>
      <Footerni />
    </>
  );
}
