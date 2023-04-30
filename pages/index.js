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
                            <img src="Leandrodev.b985dffc235f2fb06d37.jpg" alt="" className="img-fluid mt-4"  />
                        </div>
                        <div className="col-md-8">
                            <h2>{name}</h2>
                            <h3>{title}</h3>
                            <h5 >Bio</h5>
                            {about}
                            <div className="text-center d-flex align-items-center  justify-content-end">                                
                                <a href="https://www.linkedin.com/in/leandro-javier-carrizo/" target="_blank" >
                                    <img src="pngegg.png" alt="imagen de linkedin" style={{ width: '80px' }} />
                                </a>
                                <a href="mailto:leandropuntomp3@gmail.com" target="_blank">
                                    <img src="google.png" alt="imagen de google" style={{ width: '60px', marginLeft:'20px' }} />
                                </a>
                                <a href="https://wa.me/543416756110" target="_blank"> <img alt="Chat on WhatsApp" src="ws.png" style={{ width: '100px' }}/> </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <div className="row py-2">
            <div className="col-md-4">
                <div className="card bg-light">
                    <div className="card-body">
                        <h4>Skills</h4>
                        {
                            skills.map(({ skill, percentage }, index) => (
                                <div className="py-3" key={index}>
                                    <h6>{skill}</h6>
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
                        <h4>Experience</h4>
                        <ul>
                            {
                                experiences.map(({ title, charge, description, from, to }, index) => (
                                    <li className="py-3" key={index}>
                                        <h5>{title}</h5>
                                        <h6>{from}-{to}</h6>
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
                            <h2 className="text-center text-light">Portfolio</h2>
                        </div>

                        {
                            projects.map(({ title, description, image, url }, index) => (
                                <div className="col-md-4 p-2 " style={{ height: '600px' }} key={index}>
                                    <div className="card h-100">
                                        <div className="overflow w-100 d-flex align-items-center  justify-content-center ">
                                            <img src={image} alt="" className="card-img-top" />
                                        </div>
                                        <div className="card-body h-50 ">
                                            <h4>{title}</h4>
                                            <p>{description}</p>
                                        </div>
                                        <Link className="navbar-brand text-center" href={url} target="_blank">Link to page</Link>
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