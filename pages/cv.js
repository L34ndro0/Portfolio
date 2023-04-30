import Layout from "../componets/Layout";

const CV = () => (    
    
    <Layout>
        <div>
        <div className="row d-flex align-items-center  justify-content-center" >                
                <iframe className="col-md-5" style={{ height: '80vh', width: '100%'}} src="CV.pdf"/>
                
            </div>
        </div>
    </Layout>    
)

export default CV