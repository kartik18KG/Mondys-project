import React from "react";
import { Image } from "react-bootstrap";
import "./css/join-slide.css";
import { Row, Col, Button } from "react-bootstrap";

const JoiningSlide = props => {
  return (
    <div>
      <Row className="stat-numbers">
        <Col>
          <div>
            <h2 className="number text-primary">
              <b>2000+</b>
            </h2>
          </div>
          <div>
            <h3>Enrolled students</h3>
          </div>
        </Col>
        <Col>
          <div>
            <h2 className="number text-primary">
              <b>10+</b>
            </h2>
          </div>
          <div>
            <h2>Student nationalities</h2>
          </div>
        </Col>
        <Col>
          <div>
            <h3 className="number text-primary">
              <b>96%</b>
            </h3>
          </div>
          <div>
            <h3>Satisfied students</h3>
          </div>
        </Col>
      </Row>
      <div className="Edit-numbers">
        <Button className="join-btn" variant="danger">
          Edit
        </Button>
        <Button className="join-btn" variant="primary">
          Join the community Today
        </Button>
      </div>
    </div>
  );
};

export default JoiningSlide;

// <div className="">
//   <div className="join-heading">
//     <h3 className="">Join thousands of international students</h3>
//   </div>

//   <div className="stats">
//     <div className="data">
//       <div>
//         <h3 className="number text-primary">2000+</h3>
//       </div>
//       <div>enrolled students</div>
//     </div>

//     <div className="data">
//       <div>
//         <h3 className="number text-primary">10+</h3>
//       </div>
//       <div>student nationalities</div>
//     </div>

//     <div className="data">
//       <div>
//         <h3 className="number text-primary">96%</h3>
//       </div>
//       <div>satisfied students</div>
//     </div>
//   </div>
//   <div className=" join-btn">
//     <a href="/" className="btn btn-primary float-left" type="button">
//       Join Now
//     </a>
//   </div>
// </div>
