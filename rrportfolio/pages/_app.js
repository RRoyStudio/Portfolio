import"../styles/global.css";
import Link from "next/link";
import {useRouter} from "next/router";
import Image from "next/image";
import {Poppins} from "@next/font/google";
import Nav from "../components/nav";

export default function App({ Component, pageProps }) {
    const router = useRouter();


    return (
        <>
         <Nav />
        <Component {...pageProps} />
        <h1>Footer </h1>
        </>
    )
    
}