import React,{useState} from 'react';
import './Home.css'
import {Button,Offcanvas} from 'react-bootstrap'

export default function Home() {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
        <>
{/*          
          <span className="logo2">
           <h1 className="mainLogo2">Vijay</h1>
           
       </span> 
       <span className="title1">
       <p> & Developer)</p>
       </span>  */}



    <>
      <Button variant="primary" onClick={handleShow}>
      <i class="bi bi-menu-button-wide"></i>
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  
</>
    )
}
