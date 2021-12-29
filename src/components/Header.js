import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Container,
  Nav,
  Navbar,
  Form,
  FormControl,
} from "react-bootstrap";
import logo from "./logo.png";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Leagues from "../Pages/Leagues";
import Teams from "../Pages/Teams";
import League_calendar from "../Pages/League_calendar";
import Team_calendar from "../Pages/Team_calendar";

export default class Header extends Component {
  render() {
    return (
      <>
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/Leagues">
              <img
                src={logo}
                height={30}
                className="d-inline-block align-top"
                alt="logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="w-100 nav-pills nav-fill mx-1">
                <Nav.Link href="/Leagues"> Leagues </Nav.Link>
                <Nav.Link href="/Teams"> Teams </Nav.Link>
                <Nav.Link href="/League_calendar"> League calendar </Nav.Link>
                <Nav.Link href="/Team_calendar"> Team calendar </Nav.Link>
              </Nav>
              <Form className="d-flex">
                <FormControl type="text" placeholder="Request" />
                <Button className="mx-1" variant="dark">
                  Search
                </Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Leagues />} />
            <Route exact path="/Leagues" element={<Leagues />} />
            <Route exact path="/Teams" element={<Teams />} />
            <Route path="/League_calendar" element={<League_calendar />}>
              <Route path=":ids" element={<League_calendar />} />
            </Route>
            <Route exact path="/Team_calendar" element={<Team_calendar />} />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}
