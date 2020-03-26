import React from "react";
import "./css/allCourses.css";
import { NavLink } from "react-router-dom";
import {
  Card,
  CardDeck,
  OverlayTrigger,
  Tooltip,
  Button
} from "react-bootstrap";

const allCourses = () => {
  return (
    <div className="course-home-container">
      <div className="Add-course-card">
        <NavLink to="courses/add">
          <Button variant="primary">Add Course card</Button>
        </NavLink>
      </div>
      <CardDeck>
        <Card className="course-card">
          <Card.Img
            variant="top"
            src="https://lh3.googleusercontent.com/21Mlc_bfmIP34V4MgJMtr1S9sGbxNGVdj7ncT_jmiQNAhvqJNYwWhnOdKuY2h57SpOuaOk_aF5dAnrz0w4tbDLVy0wxZHJCUQC3y=s500"
          />
          <hr />
          <Card.Body>
            <Card.Title className="course-name">
              {" "}
              <h3>
                <b>Web Development</b>
              </h3>
            </Card.Title>
            <Card.Text>
              <div className="course-card-icons">
                <div className="modules">
                  <i class="far card-icon fa-list-alt">
                    <span className="card-icon-text">
                      <b>6 Modules</b>
                    </span>
                  </i>
                </div>
                <div className="start-icon">
                  <OverlayTrigger
                    key="top"
                    placement="top"
                    overlay={
                      <Tooltip id="tooltip-top">
                        <strong>Start Course...!!!</strong>.
                      </Tooltip>
                    }
                  >
                    <i class="fas start-course-icon fa-caret-right"></i>
                  </OverlayTrigger>{" "}
                </div>
                <div className="clock">
                  <i class="far card-icon fa-clock">
                    <span className="card-icon-text">
                      <b>13hrs</b>
                    </span>
                  </i>
                </div>
              </div>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="course-card-footer text-muted">
              A Course By Mondy Company &copy; &reg;
            </small>
          </Card.Footer>
        </Card>
        <Card className="course-card">
          <Card.Img
            variant="top"
            src="https://lh3.googleusercontent.com/s40RhwlQAFPM_y7ODSiA5VH6Lhjrltnh-tz295OydaXWGxU8ujKtEEAuM7qsJkrMThodotQEjqCRPJpr724puF4OXkb4vNOysdWW6w=s500"
          />
          <hr />
          <Card.Body>
            <Card.Title className="course-name">
              {" "}
              <b>Course 2</b>
            </Card.Title>
            <Card.Text>
              <div className="course-card-icons">
                <div className="modules">
                  <i class="far card-icon fa-list-alt">
                    <span className="card-icon-text">
                      <b>6 Modules</b>
                    </span>
                  </i>
                </div>
                <div className="start-icon">
                  <OverlayTrigger
                    key="top"
                    placement="top"
                    overlay={
                      <Tooltip id="tooltip-top">
                        <strong>Start Course...!!!</strong>.
                      </Tooltip>
                    }
                  >
                    <i class="fas start-course-icon fa-caret-right"></i>
                  </OverlayTrigger>{" "}
                </div>
                <div className="clock">
                  <i class="far card-icon fa-clock">
                    <span className="card-icon-text">
                      <b>13hrs</b>
                    </span>
                  </i>
                </div>
              </div>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted course-card-footer">
              A Course by Mondy Company &copy; &reg;
            </small>
          </Card.Footer>
        </Card>
      </CardDeck>
    </div>
  );
};

export default allCourses;
