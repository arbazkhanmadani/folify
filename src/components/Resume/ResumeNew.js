import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/resume.png";
import pdfd from "../../Assets/../Assets/Arbaz_Khan_resume_updated11-04-24.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;<a href={pdfd} target="_blank" style={{color:"white",textDecoration:"none"}}>Download My Resume</a>
          </Button>
        </Row>

         <img  src={pdf} style={{position:"relative",top:"10px",left:"0px", overflow:"hidden",overflowX:"scroll",width:"80vmin",height:"700px"}}/>
        
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px",marginTop:"20px" }}
          >
            <AiOutlineDownload />
            &nbsp;<a href={pdfd} target="_blank" style={{color:"white",textDecoration:"none"}}>Download My Resume</a>
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
