import { Document, Page } from 'react-pdf';
import React, { useState } from 'react';
import { pdfjs } from "react-pdf";
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function PDFViewer({ url, width }) {
    if (width > 768) width = 960

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }
    return (
        <div >
            <Document file={url} onLoadSuccess={onDocumentLoadSuccess} >
               
                {[...Array(numPages).keys()].map(pageNumber => (
                    <Page
                        key={pageNumber}
                        pageNumber={pageNumber + 1}
                        width={width - 50}                        
                        className={'mt-2'} 
                    />
                ))}          
            </Document>
        </div>
    );
}

export default PDFViewer;
