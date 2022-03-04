import {Form} from "react-bootstrap"
import{Row,Col,Container,Button} from "react-bootstrap"
import Navbarfn from "../Navbar/navbar"
import Navbar from "../Navbar/navbar"
import {Link} from "react-router-dom"
import "./signup.css"
import axios from "axios"
import { useState } from "react"
export default function Signup() {
  const [regin, setregin] = useState({
    uname:"",
    email:"",
    phone:"",
    place:"",
    role:"",
    username:"",
    password:""
  });
    const changeRegin=(e)=>{
          const {name,value}=e.target;
          setregin({...regin,[name]:value})
          
            }
            const addRegin=(e)=>{
              e.preventDefault()
            // setregin({...regin})
            // const demoobject={
            //   uname:regin.uname,
            //   email:regin.email,
            //   phone:regin.phone,
            //   place:regin.place,
            //   role:regin.role,
            //   username:regin.username,
            //   password:regin.password}
              console.log(" datas are"+regin);
            axios.post("http://localhost:9090/Signup",regin).then((data)=>{
              const datas=JSON.stringify(data)
              console.log("client side datas"+datas);
              console.log("data added is "+JSON.stringify(data.data.detail));
              
            })
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
        <Form.Label id="userlogin" className="justify-content-center" size="lg">SIGNUP</Form.Label>  
        <br></br>
        {/* <Form.Label  id="smalltext" size="sm">Enter Username and Password to Login</Form.Label>          */}
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
 
    <Form.Control type="text" placeholder="Name" name="uname" onChange={changeRegin}  />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
 
    <Form.Control type="email" placeholder="Email"  name="email" onChange={changeRegin} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
 
    <Form.Control type="number" placeholder="Mobile"  name="phone" onChange={changeRegin} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
 
    <Form.Control type="text" placeholder="Place" name="place"  onChange={changeRegin} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
  <Form.Select aria-label="Default select example" name="role" onChange={changeRegin} >
  <option>Select Your Role</option>
  <option value="patient" name="patient">Patient</option>
  <option value="staff" name="staff">Staff</option>
  <option value="admin" name="admin">Admin</option>
</Form.Select>
   
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput6">
 
    <Form.Control type="text" placeholder="UserName" name="username"   onChange={changeRegin} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlPassword">
    
   
    <Form.Control type="password" placeholder="Password"  name="password"  onChange={changeRegin} />
    <br></br>
   <Link to="/Signin"><Button variant="danger" type="submit" className="mb-3" id="button" onClick={addRegin}>SIGNIN</Button>{' '}</Link>
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