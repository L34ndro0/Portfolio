import { Document, Page } from 'react-pdf';
import { pdfjs } from "react-pdf";
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function PDFViewer({ url, width }) {
    return (
        <div >
            <Document file={url} >
                <Page pageNumber={1} width={width} className={'mt-2'} />
                <Page pageNumber={2} width={width} className={'mt-2'} />
            </Document>
        </div>
    );
}

export default PDFViewer;
