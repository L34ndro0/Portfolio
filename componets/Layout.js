import Navbar from "./Navbar"
import { useEffect } from "react"
import {useRouter} from "next/router"
import NProgress from "nprogress"

const Layout = ({ children }) => {

    const router = useRouter();

    useEffect(() => {

        const handleRouteChange = () => {
            NProgress.start();    
        }
        router.events.on('routeChangeStart',handleRouteChange),
        router.events.on('routeChangeComplete', () => NProgress.done());

        return () => {
            router.events.off('routeChangeStart', handleRouteChange);
        }
    }, [])

    return (
        <>
            <Navbar />

            <main className="container py-5 my-3">
                {children}
            </main>

            <footer className="bg-dark text-light text-center">
                <div className="py-2">
                    <h7>&copy; Leandro Carrizo Portfolio with Next.JS</h7>
                    <p className="py-2">{new Date().getFullYear()}</p>
                    <p>All rights Reservered</p>
                </div>
            </footer>
        </>
    )
}

export default Layout