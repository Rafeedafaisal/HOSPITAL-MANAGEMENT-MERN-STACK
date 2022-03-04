import {Form} from "react-bootstrap"
import{Row,Col,Container,Button} from "react-bootstrap"
import Navbarfn from "../Navbar/navbar"
import Navbar from "../Navbar/navbar"
import "./signin.css"
import {Link} from "react-router-dom"
import { useState } from "react"
export default function Signin () {
const [login, setlogin] = useState({
  username:"",
  password:""
});
  const changeLogin=(e)=>{
        const {name,value}=e.target;
        setlogin({...login,[name]:value})
        
          }
          const addLogin=(e)=>{
            e.preventDefault()
          setlogin({...login})
          }
    return(
        <>
                <div id="container">
        <Container fluid> 
  <Row>
      {/* <div id="header">
   <img src="https://th.bing.com/th/id/OIP.T19yiW1DqxTw59kGQgT5AgAAAA?pid=ImgDet&rs=1" alt="" srcset="" />
   <span>DEC</span>
   </div> */}
   <Navbarfn/>
  </Row>
  <Row id="r1">

  </Row>
  <Row>
    <Col xs={4}></Col>
    <Col xs={4}>
    <Form id="form">
        <Form.Label id="userlogin" className="justify-content-center" size="lg"> Login</Form.Label>  
        <br></br>
        <Form.Label  id="smalltext" size="sm" >Enter Username and Password to Login</Form.Label>         
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    {/* <Form.Label>Email address</Form.Label> */}
    <Form.Control type="text" placeholder="User Name"  name="username" onChange={changeLogin} value={login.username}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlPassword">
    
   
    <Form.Control type="password" placeholder="Password" name="password" onChange={changeLogin} value={login.password}/>
    <br></br>
    <Button variant="danger" className="mb-3" id="button" onClick={addLogin}>SignIn</Button>{' '}

    <br/>
    <Form.Label  id="smalltext" >OR</Form.Label>  
   <Link to="/Signup"> <Button variant="success" className="mb-3" id="button">Create an Account</Button>{' '}</Link>
  </Form.Group>
</Form>
    </Col>
    <Col xs={4}></Col>
  </Row>
</Container>
       
        </div>
        </>
    )
}