import Layout from "../componets/Layout"
import axios from "axios"
import Link from "next/link"

const Github = ({ user, repos }) => {

    return (
        <Layout>
            <div className="row">
                <div className="col-md-4 offset-md-4" >
                    <div className="card card-body text-center " >
                        <h5>GitHub {user.name}</h5>
                        <div>
                            <img src={user.avatar_url} style={{ height: '150px', width: '150px' }} alt="" />
                            <p>{user.bio}</p>
                        </div>
                        <a href={user.html_url} target="_blank" className="btn btn-outline-secondary my-2">Perfil GitHub</a>
                    </div>
                </div>
            </div>

            <div className="row py-2">
                <div className="col-md-12">
                    <div className="card card-body bg-dark">
                        <div className="row">
                            <div className="col-md-12">
                                <h5 className="text-center text-light">Repositorios</h5>
                            </div>

                            {
                                repos.map(({ name, html_url }, index) => (
                                    <div className="col-md-2 p-2 " style={{ height: '250px' }} key={index}>
                                        <div className="card h-100">
                                            <div className="overflow w-100 d-flex align-items-center  justify-content-center ">
                                                <img src='https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU' alt="" className="card-img-top" />
                                            </div>
                                            <div className="card-body h-50 text-center">
                                                <h7>{name}</h7>
                                            </div>
                                            <a className="navbar-brand text-center" href={html_url} target="_blank">Link to repo</a>
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
}

export async function getServerSideProps() {

    const res = await axios('https://api.github.com/users/L34ndro0')
    const repos = await axios(res.data.repos_url)

    return {
        props: {
            user: res.data,
            repos: repos.data
        }
    }
}

export default Github