import Layout from "../componets/Layout"
import { skills, about, name, title, experiences, projects } from "../profile"
import Link from "next/link"

const Index = () => (
    <Layout>
        <header className="row">
            <div className="col-md-12">
                <div className=" card card-body bg-secondary">
                    <div className="row">
                        <div className="col-md-4">
                            <img src="Leandrodev.b985dffc235f2fb06d37.jpg" alt="" className="img-fluid" />
                        </div>
                        <div className="col-md-8">
                            <h2>{name}</h2>
                            <h3>{title}</h3>
                            <h5 >Bio</h5>
                            {about}
                            <a href="/hireme">Hire Me</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <div className="row py-2">
            <div className="col-md-4">
                <div className="card bg-light">
                    <div className="card-body">
                        <h3>Skills</h3>
                        {
                            skills.map(({ skill, percentage }, index) => (
                                <div className="py-3" key={index}>
                                    <h5>{skill}</h5>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" style={{ width: `${percentage}%` }} />
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </div>
            <div className="col-md-8">
                <div className="card bg-light">
                    <div className="card-body">
                        <h3>Experience</h3>
                        <ul>
                            {
                                experiences.map(({ title, charge, description, from, to }, index) => (
                                    <li className="py-3" key={index}>
                                        <h5>{title}</h5>
                                        <h5>{from}-{to}</h5>
                                        <p>{charge}</p>
                                        <p>{description}</p>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div className="row">
            <div className="col-md-12">
                <div className="card card-body bg-dark">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="text-center text-light">Portfolio</h1>
                        </div>

                        {
                            projects.map(({title,description,image,url}, index) => (
                                <div className="col-md-4 p-2" key={index}>
                                    <div className="card h-100">
                                        <div className="overflow">
                                            <img src={image} alt="" className="card-img-top" />
                                        </div>
                                        <div className="card-body">
                                            <h3>{title}</h3>
                                            <p>{description}</p>
                                            <Link className="navbar-brand" href={url}>Link to page</Link>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>


    </Layout>
)

export default Index