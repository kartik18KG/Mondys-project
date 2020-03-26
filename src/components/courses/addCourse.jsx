import React from "react";
import { Card, Button, Form, Row, Col } from "react-bootstrap";
import "./css/addCourse.css";

const addCourse = () => {
  return (
    <div className="add-card-container">
      <Form>
        <Card className="add-card">
          <Card.Header className="" as="h2">
            <Form.Label>Image URL</Form.Label>
            <Form.Control type="text" placeholder="Enter Url" />
          </Card.Header>
          <Card.Body>
            <Card.Title className="course-name">
              {" "}
              <h3>
                <b>
                  {" "}
                  <Form.Label>Course Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter CourseName here"
                  />
                </b>
              </h3>
            </Card.Title>
            <Card.Text>
              <Row>
                <Col>
                  <Form.Label>Number of modules</Form.Label>
                  <Form.Control type="number" placeholder="Number of modules" />
                </Col>
                <Col>
                  <Form.Label>Course Duration</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Course Duration in Hours"
                  />
                </Col>
              </Row>
            </Card.Text>
            <Button
              className="submit-add-course"
              variant="primary"
              type="submit"
            >
              Add Course
            </Button>
          </Card.Body>
        </Card>
      </Form>
    </div>
  );
};

export default addCourse;
