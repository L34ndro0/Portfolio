import Layout from "../componets/Layout"

const Diplomates = () => {

    return (
        <Layout>
            <div className="row d-flex align-items-center  justify-content-center" >                
                <iframe className="col-md-5" style={{ height: '540px', width: '50%'}} src="henry.pdf"/>
                <iframe className="col-md-5" style={{ height: '540px', width: '50%' }} src="oracleOne.pdf"/>
            </div>
        </Layout>
    )
}

export default Diplomates