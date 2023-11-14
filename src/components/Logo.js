import "../styles.css";
import logo from "../img/logo.jpg";
import Link from "./Link";
import Image from "./Image";

export default function Logo() {
  return <Link href="#">
    <Image src={logo} alt={"Logo"} />
  </Link>
}
