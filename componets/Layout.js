import Navbar from "./Navbar"

const Layout = ({ children }) => (
    <>

        <Navbar />

        <main className="container py-4">
            {children}
        </main>

        <footer className="bg-dark text-light text-center">
            <div className="py-2">
                <h7>&copy; Leandro Carrizo Portfolio</h7>
                <p className="py-2">{new Date().getFullYear()}</p>
                <p>All rights Reservered</p>
            </div>        
        </footer>        
        
    </>
)

export default Layout