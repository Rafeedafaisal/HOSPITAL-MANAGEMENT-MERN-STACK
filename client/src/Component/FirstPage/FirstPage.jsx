import {Container,Row,Navbar,Nav} from "react-bootstrap"
import { Button } from "react-bootstrap"
import Navbarfn from "../Navbar/navbar"
import {Link} from "react-router-dom"
import "./firstpage.css"
export default function Firstpage () {
    return(
        <div>
            <Container fluid id="mainpage">
  <Row>
    {/* <Col>1 of 1</Col> */}
    <Navbarfn/>
  </Row>
  {/* <Row id="r1">
      
  </Row> */}
  <Row id="r2">
      
      </Row>
  <Row>
  {/* <Button variant="outline-danger">LOGIN</Button>{' '} */}
  <div className="mb-2">
  <Link to="/Signin">  <Button variant="danger" size="lg">
      LOGIN
    </Button>{' '}
    </Link>
  </div>
  </Row>
 
</Container>
        </div>
    )
}