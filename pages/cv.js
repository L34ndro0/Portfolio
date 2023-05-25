import Layout from "../componets/Layout";
import PDFviewer from '../componets/Pdfviewer';
import { useEffect, useState } from "react";

const CV = () => {
    
    const [pageWidth, setPageWidth] = useState(0);

    useEffect(() => {
        setPageWidth(window.innerWidth);        
    }, []);
    
    return (
        <Layout>
            <div className="container">
                <div className="d-flex flex-column justify-content-center align-items-center mt-2" >
                    <PDFviewer url="CV.pdf" width={pageWidth - 50} />
                </div>
            </div>
        </Layout>
    )
}
export default CV