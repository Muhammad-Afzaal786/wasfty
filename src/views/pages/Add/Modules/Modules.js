import React from "react";

import {
  Row,
  Col,
  Form,
  Label,
  Input,
  Button,
  Card,
  CardBody,
} from "reactstrap";

function Modules() {
  return (
    <>
      <Row>
        <Col>
          <Card className="mb-4">
            <CardBody>
              <Form>
                <Row>
                  <Col md="12" sm="12" className="mb-1">
                    <Label className="form-label" for="nameMulti">
                      Name *
                    </Label>
                    <Input
                      type="text"
                      name="name"
                      id="nameMulti"
                      placeholder="Name"
                    />
                   
                  </Col>

                  <Col sm="12">
                    <div className="d-flex justify-content-end">
                      <Button.Ripple
                        style={{ backgroundColor: "#24D6CC", color: "black" }}
                        className="round"
                        color="primary"
                        type="submit"
                        onClick={(e) => e.preventDefault()}
                        outline
                      >
                        Success
                      </Button.Ripple>
                    </div>
                  </Col>
                </Row>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default Modules;
