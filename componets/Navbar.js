import Link from "next/link"

const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container ">
            <Link className="navbar-brand" href="/">Home</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarNav">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link href="/diplomates" className="nav-link">
                            Diplomates
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/cv" className="nav-link">
                            CV
                        </Link>
                    </li>
                    <li className="nav-item" >
                        <Link href="/github" className="nav-link">
                            Github
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
)

export default Navbar