import React, { Component } from "react";
import "./styles/styleTeams.css";
import premier_league from "./pictures/PL.png";
import laliga from "./pictures/LaLiga.png";
import champ_league from "./pictures/CL.png";
import bundesliga from "./pictures/bundesliga.png";
import LP from "./pictures/Liga_portugal.png";
import Liga1 from "./pictures/liga1.png";
import Nederlands from "./pictures/nederlands.png";
import SA_italy from "./pictures/serieA_italy.png";
import { Container } from "react-bootstrap";

export default class Teams extends Component {
  render() {
    return (
      <>
        <Container>
          <div className="row">
            <div className="col-md-12">
              <ul className="leagues">
                <li className="leagues_item">
                  <a href="League_calendar/first">
                    <div className="leagues_item_link">
                      <div className="leagues_item_pictures">
                        <img
                          src={premier_league}
                          className="leagues_pictures"
                        />
                      </div>
                      <div className="leagues_text">
                        Premier League
                        <br />
                        England
                      </div>
                    </div>
                  </a>
                </li>
                <li className="leagues_item">
                  <a href="League_calendar/second">
                    <div className="leagues_item_link">
                      <div className="leagues_item_pictures">
                        <img src={laliga} className="leagues_pictures" />
                      </div>
                      <div className="leagues_text">
                        La Liga
                        <br />
                        Spain
                      </div>
                    </div>
                  </a>
                </li>
                <li className="leagues_item">
                  <a href="League_calendar/third">
                    <div className="leagues_item_link">
                      <div className="leagues_item_pictures">
                        <img src={champ_league} className="leagues_pictures" />
                      </div>
                      <div className="leagues_text">
                        Champions League
                        <br />
                        Europe
                      </div>
                    </div>
                  </a>
                </li>
                <li className="leagues_item">
                  <a href="League_calendar/fourth">
                    <div className="leagues_item_link">
                      <div className="leagues_item_pictures">
                        <img src={bundesliga} className="leagues_pictures" />
                      </div>
                      <div className="leagues_text">
                        Bundesliga
                        <br />
                        Germany
                      </div>
                    </div>
                  </a>
                </li>
                <li className="leagues_item">
                  <a href="League_calendar/fifth">
                    <div className="leagues_item_link">
                      <div className="leagues_item_pictures">
                        <img src={LP} className="leagues_pictures" />
                      </div>
                      <div className="leagues_text">
                        Premiera Liga
                        <br />
                        Portugal
                      </div>
                    </div>
                  </a>
                </li>
                <li className="leagues_item">
                  <a href="League_calendar/sixth">
                    <div className="leagues_item_link">
                      <div className="leagues_item_pictures">
                        <img src={Liga1} className="leagues_pictures" />
                      </div>
                      <div className="leagues_text">
                        Ligue 1
                        <br />
                        France
                      </div>
                    </div>
                  </a>
                </li>
                <li className="leagues_item">
                  <a href="League_calendar/seventh">
                    <div className="leagues_item_link">
                      <div className="leagues_item_pictures">
                        <img src={Nederlands} className="leagues_pictures" />
                      </div>
                      <div className="leagues_text">
                        Eredivisie
                        <br />
                        Netherlands
                      </div>
                    </div>
                  </a>
                </li>
                <li className="leagues_item">
                  <a href="League_calendar/eighth">
                    <div className="leagues_item_link">
                      <div className="leagues_item_pictures">
                        <img src={SA_italy} className="leagues_pictures" />
                      </div>
                      <div className="leagues_text">
                        Serie A
                        <br />
                        Italy
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </>
    );
  }
}
