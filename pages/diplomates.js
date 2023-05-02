import Layout from "../componets/Layout"
import PDFViewer from "../componets/pdfviewer"
import { useState, useEffect } from "react";

const Diplomates = () => {

    const [pageWidth, setPageWidth] = useState(0);

    useEffect(() => {
        setPageWidth(window.innerWidth);
        if (pageWidth > 1024) setPageWidth(700)
    }, []);   

    return (
        <Layout>
            <div className="container" >
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <div className="mt-2" >
                        <PDFViewer url="henry.pdf" width={pageWidth - 50} />
                    </div>
                    <div className="mt-2">
                        <PDFViewer url="oracleOne.pdf" width={pageWidth -  50} />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Diplomates