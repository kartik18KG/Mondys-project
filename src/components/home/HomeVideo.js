import React from "react";
import "./css/Home-video.css";
import { Row, Col } from "react-bootstrap";

const HomeVideo = props => {
  return (
    <div className="container-sm p-4">
      <Row className="video-container">
        <Col sm className="cont1">
          <img
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80"
            className=" video-thumbnail"
            alt=""
          />
        </Col>
        <Col md="auto"></Col>
        <Col sm className="cont2">
          <div>
            <div className="goal">
              <div>
                <i class="fas fa-desktop pc-icon"></i>
              </div>
              <div>
                <strong>
                  <span className="text-primary">Learn Fast</span>
                  <br />
                </strong>
                Short online courses with compact learning chapters enable you
                to learn business skills faster than ever.
              </div>
            </div>
            <div className="goal">
              <div>
                <i class="far fa-clock clock-icon"></i>
              </div>
              <div>
                <strong>
                  <span className="text-primary">Start immediately</span>
                  <br />
                </strong>
                All courses are 100% online and self-paced. This enables you to
                start studying right away.
              </div>
            </div>
            <div className="goal">
              <div>
                <i class="fas fa-globe-asia globe-icon"></i>
              </div>
              <div>
                <strong>
                  <span className="text-primary">Join a global community</span>
                  <br />
                </strong>
                No formal requirements: our courses are open to all
                nationalities, ages and professions.
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default HomeVideo;

// <div className="row">
//   <div className="intro-video col-sm-6 ">
//     <img
//       src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"
//       className="video-image"
//       alt=""
//     />
//   </div>

//   <div className="goals col-sm-6 ">

//   </div>
// </div>
