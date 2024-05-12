import React, { Component } from "react";
import GitHub from "./GitHub";
import Contact from "./Contact"; // Assuming you have a Contact component defined
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">React Router Example</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/">Contact</Nav.Link>
                <Nav.Link href="/github">GitHub</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/github" element={<GitHub />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

class Home extends Component {
  render() {
    return <div>Home</div>;
  }
}

class NotFound extends Component {
  render() {
    return <div>Not Found</div>;
  }
}

class About extends Component {
  render() {
    return <div>Contact</div>;
  }
}

export default App;
