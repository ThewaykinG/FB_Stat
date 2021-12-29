import React from "react";
import Table from "./tables/table_teams";
import Loader from "../Pages/Loader/Loader";
import { Container, Tab, Nav, Row, Col } from "react-bootstrap";

class Tables_team extends React.Component {
  state = {
    isLoading: true,
    data: []
  };

  async componentDidMount() {
    const response = await fetch(
      `http://api.football-data.org/v2/competitions/${this.props.id}/teams`,
      {
        headers: {
          "X-Auth-Token":`${process.env.REACT_APP_SECRET_KEY}`,
        },
      }
    );
    console.log(process.env.REACT_APP_SECRET_KEY);
    const data = await response.json();
    console.log(data);
    this.setState({
      isLoading: false,
      data: data["teams"],
    });
  }

  render() {
    return (
      <div className="tableteam">
        {this.state.isLoading ? <Loader /> : <Table data={this.state.data} />}
      </div>
    );
  }
}

export default class Teams extends React.Component {
  state={
    id1: 'PL',
    id2: 'PD',
    id3: 'CL',
    id4: 'BL1',
    id5: 'PPL',
    id6: 'FL1',
    id7: 'DED',
    id8: 'SA',
  }
  render() {
    return (
      <>
        <Container>
          <Tab.Container id="ledt-tabs-example" defaultActiveKey="first">
            <Row>
              <Col className="my-3">
                <Nav variant="pills" className="flex-column nav-pills nav-fill">
                  <Nav.Item >
                    <Nav.Link eventKey="first">Premier League</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">La Liga</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Champions League</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="fourth">Bundes Liga</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="fifth">Premiera Liga</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="sixth">Ligue 1</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="seventh">Eredivisie</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="eighth">Serie A</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content className="float-left mt-2">
                  <Tab.Pane eventKey="first">
                    <Tables_team id={this.state.id1}/>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                  <Tables_team id={this.state.id2}/>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                  <Tables_team id={this.state.id3}/>
                  </Tab.Pane>
                  <Tab.Pane eventKey="fourth">
                  <Tables_team id={this.state.id4}/>
                  </Tab.Pane>
                  <Tab.Pane eventKey="fifth">
                  <Tables_team id={this.state.id5}/>
                  </Tab.Pane>
                  <Tab.Pane eventKey="sixth">
                  <Tables_team id={this.state.id6}/>
                  </Tab.Pane>
                  <Tab.Pane eventKey="seventh">
                  <Tables_team id={this.state.id7}/>
                  </Tab.Pane>
                  <Tab.Pane eventKey="eighth">
                  <Tables_team id={this.state.id8}/>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Container>
      </>
    );
  }
}
