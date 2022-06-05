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

function Regions() {
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
                  
                      placeholder="Name"
                    />
                    <div className="d-flex flex-column mt-2">
                      <Label
                        for="switch-success"
                        className="form-check-label mb-50"
                      >
                        Moh
                      </Label>
                      <div className="form-switch form-check-success">
                        <Input
                          type="switch"
                          id="switch-success"
                          name="success"
                          defaultChecked
                        />
                      </div>
                    </div>
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

export default Regions;
