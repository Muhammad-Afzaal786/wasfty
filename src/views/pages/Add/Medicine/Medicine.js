import React, { useState } from "react";

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

function Medicine() {
  const [user, setUser] = useState({
    name: "",
    generic: ""
  });

  const handleChange = (name, value) => {
    // name = event.target.name;
    // value = event.target.value;

    setUser({ ...user, [name]: value });
  };
  console.log(user);
  return (
    <>
      <Row>
        <Col>
          <Card className="mb-4">
            <CardBody>
              <Form>
                <Row>
                  <Col md="12" sm="12" className="mb-1">
                    <Label className="form-label">
                      Name
                    </Label>
                    <Input
                      type="text"
                      name="name"
                      onChange={(e) => handleChange("name", e.target.value)}
                      value={user.name}
                      placeholder="Name"
                    />
                  </Col>
                  <Col md="12" sm="12" className="mb-1">
                    <Label className="form-label">
                      Generic id
                    </Label>
                    <Input
                      type="text"
                      name="generic"
                      onChange={(e) => handleChange("generic", e.target.value)}
                      value={user.generic}
                      placeholder="Generic id"
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

export default Medicine;
