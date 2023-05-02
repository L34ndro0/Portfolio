import Layout from "../componets/Layout";
import PDFViewer from "../componets/pdfviewer";
import { useEffect, useState } from "react";

const CV = () => {
    
    const [pageWidth, setPageWidth] = useState(0);

    useEffect(() => {
        setPageWidth(window.innerWidth);
        if (pageWidth > 1024) setPageWidth(700)
    }, []);
    
    return (
        <Layout>
            <div className="container">
                <div className="d-flex flex-column justify-content-center align-items-center mt-2" >
                    <PDFViewer url="CV.pdf" width={pageWidth - 50} />
                </div>
            </div>
        </Layout>
    )
}
export default CV