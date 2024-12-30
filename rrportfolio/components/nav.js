import Link from "next/link";
import {useRouter} from "next/router";
import Image from "next/image";
import {Poppins} from "@next/font/google";

export default function Nav() {
    const router = useRouter();
    return(
        <div>
            <Image src="/images/Nav-footer-icons-13.png" alt="Logo" width={100} height={100} />
            <nav className="header-Nav">
                <ul>
                    <li>
                        <Link className={router.pathname === "/" ? "active" : ""} href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/projects" className={router.pathname === "/projects" ? "active" : ""}>Projects</Link>
                    </li>
                    <li>
                        <Link href="/contact" className={router.pathname === "/contact" ? "active" : ""}>Contact Me</Link>
                    </li>
                </ul>
            
            </nav>
        </div>
    )
}