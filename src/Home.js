import React from "react";
import "./Home.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../src/assests/logo.png";
import two from "../src/assests/two.png";
import three from "../src/assests/three.png";
import four from "../src/assests/four.png";
import five from "../src/assests/five.png";
import six from "../src/assests/six.png";
import seven from "../src/assests/seven.png";
import first1 from "../src/assests/first1.png";
import first2 from "../src/assests/first2.png";
import first3 from "../src/assests/first3.png";
import first4 from "../src/assests/first4.png";
import Line from "../src/assests/Line.png";
import Vector from "../src/assests/Vector.png";
import Vector1 from "../src/assests/Vector1.png";
import Vector3 from "../src/assests/Vector3.png";
import Vector4 from "../src/assests/Vector4.png";
import French from "../src/assests/French.png";
import { Col, Row } from "react-bootstrap";

const Home = () => {
  return (
    <div className="top">
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand>
            <Nav className="me-auto">
              {/* <Nav.Link className='view'>View Services</Nav.Link>
            <Nav.Link className='view'>View Professionals</Nav.Link>
            <Nav.Link className='view'>French Cut</Nav.Link> */}
            </Nav>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="view">View Services</Nav.Link>
              <Nav.Link className="view">View Professionals</Nav.Link>
              <Nav.Link className="views">
                <img src={French} alt="logo" />
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link className="view">Make A Booking</Nav.Link>
              <Nav.Link className="view">View Products</Nav.Link>
              <Nav.Link>
                {" "}
                <img className="travellogo" src={logo} alt="logo" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div>
        <Row className="one">
          <Col sm={6}>
            <div className="lorem">
              Lorem Ipsum Dolor Sit Amet
              <br /> Consecetur adipisci elit
            </div>
          </Col>
          <Col sm={12}>
            <div>
              <button className="btn">Buy now</button>
            </div>
          </Col>
          <Col sm={4}>
            <div className="cart">Your cart</div>
          </Col>
          <Col sm={4}>
            <div></div>
          </Col>
          <Col sm={4}>
            <div className="cart"> Cart total : $198</div>
          </Col>
          <Col sm={2}>
            <div className="nova">
              <div>
                <img className="travellogo" src={two} alt="logo" />
              </div>
              <div className="trimer">
                Nova Trimer
                <div className="prices">$99.00</div>
              </div>
            </div>
          </Col>
          <Col sm={2}>
            <div className="nova">
              <div>
                <img className="travellogo" src={three} alt="logo" />
              </div>
              <div className="trimer">
                Brush
                <div className="prices">$99.00</div>
              </div>
            </div>
          </Col>
          <Col sm={8}></Col>
          <Col sm={12}>
            <div className="product">Products</div>
          </Col>
        </Row>
        <Row>
          <Col sm={2}></Col>
          <Col sm={2}>
            {" "}
            <div className="pro">
              <div>
                <img className="fours" src={four} alt="logo" />
              </div>
              <div className="shaver">
                Philips electric shaver
                <div className="num">$99.00</div>
                <button className="add">Add to cart</button>
              </div>
            </div>
          </Col>
          <Col sm={2}>
            {" "}
            <div className="pro">
              <div>
                <img className="fours" src={five} alt="logo" />
              </div>
              <div className="shaver">
                Philips electric shaver
                <div className="num">$99.00</div>
                <button className="add">Add to cart</button>
              </div>
            </div>
          </Col>
          <Col sm={2}>
            {" "}
            <div className="pro">
              <div>
                <img className="fours" src={six} alt="logo" />
              </div>
              <div className="shaver">
                Philips electric shaver
                <div className="num">$99.00</div>
                <button className="add">Add to cart</button>
              </div>
            </div>
          </Col>
          <Col sm={2}>
            {" "}
            <div className="pro">
              <div>
                <img className="fours" src={seven} alt="logo" />
              </div>
              <div className="shaver">
                Philips electric shaver
                <div className="num">$99.00</div>
                <button className="add">Add to cart</button>
              </div>
            </div>
          </Col>
          <Col sm={2}></Col>
        </Row>
        <Row className="rowfour">
          <Col sm={2}></Col>
          <Col sm={2}>
            {" "}
            <div className="pro">
              <div>
                <img className="fours" src={first1} alt="logo" />
              </div>
              <div className="shaver">
                Philips electric shaver
                <div className="num">$99.00</div>
                <button className="add">Add to cart</button>
              </div>
            </div>
          </Col>
          <Col sm={2}>
            {" "}
            <div className="pro">
              <div>
                <img className="fours" src={first2} alt="logo" />
              </div>
              <div className="shaver">
                Philips electric shaver
                <div className="num">$99.00</div>
                <button className="add">Add to cart</button>
              </div>
            </div>
          </Col>
          <Col sm={2}>
            {" "}
            <div className="pro">
              <div>
                <img className="fours" src={first3} alt="logo" />
              </div>
              <div className="shaver">
                Philips electric shaver
                <div className="num">$99.00</div>
                <button className="add">Add to cart</button>
              </div>
            </div>
          </Col>
          <Col sm={2}>
            {" "}
            <div className="pro">
              <div>
                <img className="fours" src={first4} alt="logo" />
              </div>
              <div className="shaver">
                Philips electric shaver
                <div className="num">$99.00</div>
                <button className="add">Add to cart</button>
              </div>
            </div>
          </Col>
          <Col sm={2}></Col>
        </Row>
        <Row className="rowfive">
          <Col sm={4}>
            <div>
              <img src={Line} alt="logo" />
            </div>
          </Col>
          <Col sm={4}>
            <div className="vect">
              <div className="vector">
                <img src={Vector} alt="logo" />
              </div>
              <div className="vector">
                <img src={Vector1} alt="logo" />
              </div>
              <div className="vector">
                <img src={Vector3} alt="logo" />
              </div>
              <div className="vector">
                <img src={Vector4} alt="logo" />
              </div>
            </div>
          </Col>
          <Col sm={4}>
            <div>
              <img src={Line} alt="logo" />
            </div>
          </Col>
        </Row>
        <Row className="rowsix">
          <Col sm={12}>
            <div className="french">
              <img src={French} alt="logo" />
            </div>
          </Col>
          <Col sm={12}>
            <div className="gmail">Lorem ipsum@gmail.com</div>
          </Col>
          <Col sm={12}>
            <div className="dolor">
              Lorem ipsum dolor sit amet, consectetur adipisci elit,
              <br />
              sed eiusmod tempor incidunt ut labore et dolore magna aliqua.{" "}
              <br />
              Ut enim ad minim veniam, quis nostrum exercitationem.
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default Home;
