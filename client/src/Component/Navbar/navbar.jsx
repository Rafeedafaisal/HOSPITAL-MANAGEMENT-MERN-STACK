import {Navbar,Nav,Container} from "react-bootstrap"
export default function Navbarfn() {
    return(
        <>
        <Navbar bg="danger" variant="dark">
    <Container>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="https://yt3.ggpht.com/a/AATXAJy3Z0tcal20xHOk9lr59i4FeCl3lKxEfSveFA=s900-c-k-c0xffffffff-no-rj-mo"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
      oron Care Hospital
      </Navbar.Brand>
      <Nav className="d-flex">
      <Nav.Link href="#home">ABOUT</Nav.Link>
      <Nav.Link href="#features">CONTACT US</Nav.Link>
      <Nav.Link href="#pricing">SERVICES</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
        </>
    )
}