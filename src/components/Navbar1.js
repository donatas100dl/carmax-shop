import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";

import "../main.css";

function Navbar1() {
  return (
    <Navbar
      key="md"
      md="md"
      expand="md"
      className="mb-3 rounded-lg d-flex justify-evenly mx-auto"
      style={{ minWidth: "60vw" }}
    >
      <Container fluid>
        <Navbar.Brand href="/carmax-shop" className="pb-2">
          <Link to="/carmax-shop">
            <svg
              class="header-main-logo"
              height="24"
              width="123"
              viewBox="0 0 327.84 64"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                fill="#053361"
                d="M289.8 5.05a1.1 1.1 0 0 0 .85-1.12c0-1.17-1.23-1.17-1.57-1.17h-1.65V7.4h.64V5.3h.8c.76 0 .94.2 1 .9a5.26 5.26 0 0 0 .23 1.2h.66a6.74 6.74 0 0 1-.28-1.46c-.05-.57-.2-.77-.7-.9zm-.72-.3h-1V3.3h1c.34 0 .92 0 .92.74s-.6.7-.92.7zM289 .8a4.33 4.33 0 1 0 4.32 4.32A4.34 4.34 0 0 0 289 .8zm0 8.2a3.83 3.83 0 1 1 3.8-3.84A3.82 3.82 0 0 1 289 9z"
              ></path>
              <path
                fill="#053361"
                d="M129.42 54.55h32.32V64h-32.32v-9.45zm41.53 0V64h32.32v-9.45zm41.52 0V64h32.32v-9.45zm41.52 0V64h32.3v-9.45zm41.52 0V64h32.32v-9.45z"
              ></path>
              <path
                fill="#053361"
                d="M129.57 42.43V1.23h16.26l.4 6.24h.15c2.82-5.9 7-7.47 10.88-7.47 5.3 0 9.16 2.38 11.3 7.47 2.82-5.9 7-7.47 10.88-7.47 7 0 12 4.1 12 15v27.43h-16.7V16.58c0-2.87-1.3-4.43-2.88-4.43s-3 1.3-3 4.6v25.68h-16.7V16.58c0-2.87-1.3-4.43-2.9-4.43s-3 1.3-3 4.6v25.68zm138.26 0h16.75l-11.48-22 9.35-19H265l-4.64 13-5.6-13H237.3l10.16 19-11.15 22h16.95l7.1-15 7.48 15zm-48.7-14.2V24.8h-2.6c-5.1 0-6.2 2.46-6.2 4.74 0 2.62 1.5 4.25 4.44 4.25 3.34 0 4.37-2.2 4.37-5.56zm0-11.32v-4.23c0-2-1-3.27-3.72-3.27-2.37 0-3.65.82-3.88 4.25h-15.86c.64-11 10.5-13.4 20.57-13.4 15.33 0 20.25 5 20.25 14.54v27.6h-16.85l-.5-3.88c-2.78 3.76-7 5.15-11.36 5.15-8.1 0-13.8-4.4-13.8-12.5 0-10.12 7.93-14.3 22.86-14.3z"
              ></path>
              <path
                fill="#053361"
                d="M25.18 27.16H40.5c0 11.38-9.1 16.35-19.32 16.35C6.7 43.5 0 34.7 0 21.6-.38 8.75 7.28.06 21.23.06c10.4 0 19.22 4.23 19.28 16.36h-15c-.22-4.68-1.93-5.6-3.93-5.6-4.24 0-4.64 4.35-4.64 11 0 6.3.35 11 4.46 11 2.1 0 3.54-1.26 3.77-5.6zm78.18-8.77h1.37c3.15 0 5.43-1.1 5.43-4.18s-2.1-3.66-5.3-3.66h-1.5v7.83zm-16 24V1.2h24.4c8.84 0 14 2.68 14 10.45 0 4.74-2 8.34-8.18 9.94 4 .33 6.17 2.1 7 5.24.9 3.54 1.3 8.08 2.07 15.6h-16c-1.5-9.25-.88-8.3-1.45-11.83-.35-2.05-1.37-2.85-4-2.85h-1.9v14.68zM58.53 25.72h7l-3.4-15.55-3.6 15.55zm-19.8 16.7L52 1.13h21.17l13.27 41.3H69.5l-1.6-6.64H56.08l-1.66 6.63z"
              ></path>
            </svg>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-md`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-md`}
          aria-labelledby={`offcanvasNavbarLabel-md`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-md`}>
              <svg
                class="header-main-logo"
                height="24"
                width="123"
                viewBox="0 0 327.84 64"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  fill="#053361"
                  d="M289.8 5.05a1.1 1.1 0 0 0 .85-1.12c0-1.17-1.23-1.17-1.57-1.17h-1.65V7.4h.64V5.3h.8c.76 0 .94.2 1 .9a5.26 5.26 0 0 0 .23 1.2h.66a6.74 6.74 0 0 1-.28-1.46c-.05-.57-.2-.77-.7-.9zm-.72-.3h-1V3.3h1c.34 0 .92 0 .92.74s-.6.7-.92.7zM289 .8a4.33 4.33 0 1 0 4.32 4.32A4.34 4.34 0 0 0 289 .8zm0 8.2a3.83 3.83 0 1 1 3.8-3.84A3.82 3.82 0 0 1 289 9z"
                ></path>
                <path
                  fill="#053361"
                  d="M129.42 54.55h32.32V64h-32.32v-9.45zm41.53 0V64h32.32v-9.45zm41.52 0V64h32.32v-9.45zm41.52 0V64h32.3v-9.45zm41.52 0V64h32.32v-9.45z"
                ></path>
                <path
                  fill="#053361"
                  d="M129.57 42.43V1.23h16.26l.4 6.24h.15c2.82-5.9 7-7.47 10.88-7.47 5.3 0 9.16 2.38 11.3 7.47 2.82-5.9 7-7.47 10.88-7.47 7 0 12 4.1 12 15v27.43h-16.7V16.58c0-2.87-1.3-4.43-2.88-4.43s-3 1.3-3 4.6v25.68h-16.7V16.58c0-2.87-1.3-4.43-2.9-4.43s-3 1.3-3 4.6v25.68zm138.26 0h16.75l-11.48-22 9.35-19H265l-4.64 13-5.6-13H237.3l10.16 19-11.15 22h16.95l7.1-15 7.48 15zm-48.7-14.2V24.8h-2.6c-5.1 0-6.2 2.46-6.2 4.74 0 2.62 1.5 4.25 4.44 4.25 3.34 0 4.37-2.2 4.37-5.56zm0-11.32v-4.23c0-2-1-3.27-3.72-3.27-2.37 0-3.65.82-3.88 4.25h-15.86c.64-11 10.5-13.4 20.57-13.4 15.33 0 20.25 5 20.25 14.54v27.6h-16.85l-.5-3.88c-2.78 3.76-7 5.15-11.36 5.15-8.1 0-13.8-4.4-13.8-12.5 0-10.12 7.93-14.3 22.86-14.3z"
                ></path>
                <path
                  fill="#053361"
                  d="M25.18 27.16H40.5c0 11.38-9.1 16.35-19.32 16.35C6.7 43.5 0 34.7 0 21.6-.38 8.75 7.28.06 21.23.06c10.4 0 19.22 4.23 19.28 16.36h-15c-.22-4.68-1.93-5.6-3.93-5.6-4.24 0-4.64 4.35-4.64 11 0 6.3.35 11 4.46 11 2.1 0 3.54-1.26 3.77-5.6zm78.18-8.77h1.37c3.15 0 5.43-1.1 5.43-4.18s-2.1-3.66-5.3-3.66h-1.5v7.83zm-16 24V1.2h24.4c8.84 0 14 2.68 14 10.45 0 4.74-2 8.34-8.18 9.94 4 .33 6.17 2.1 7 5.24.9 3.54 1.3 8.08 2.07 15.6h-16c-1.5-9.25-.88-8.3-1.45-11.83-.35-2.05-1.37-2.85-4-2.85h-1.9v14.68zM58.53 25.72h7l-3.4-15.55-3.6 15.55zm-19.8 16.7L52 1.13h21.17l13.27 41.3H69.5l-1.6-6.64H56.08l-1.66 6.63z"
                ></path>
              </svg>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="">
            <Nav className="flex-grow-1 pe-3 d-flex flex-coll flex-md-row">
              <container className="flex-grow-1 pe-3 d-flex flex-md-row flex-col ">
                <Nav.Link href="#">Shop</Nav.Link>
                <Nav.Link href="#">Sell/Trade</Nav.Link>
                <Nav.Link href="#">Finance</Nav.Link>
                <NavDropdown title="More" id={`offcanvasNavbarDropdown-md`}>
                  <NavDropdown.Item href="#">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#">Service & Repair</NavDropdown.Item>
                  <NavDropdown.Item href="#">FAQ & Suport</NavDropdown.Item>
                  <NavDropdown.Item href="#">Why CarMax</NavDropdown.Item>
                  <NavDropdown.Item href="#">Buying Online</NavDropdown.Item>
                  <NavDropdown.Item href="#">
                    Car Research & MaxCare??
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#">
                    Search jobs at CarMax
                  </NavDropdown.Item>
                </NavDropdown>
              </container>
              <container className="d-flex gap-3 min-w-fit">
                <Nav.Link className="font-bold">Sing Up</Nav.Link>
                <Nav.Link className="font-bold">Log In</Nav.Link>
              </container>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default Navbar1;
