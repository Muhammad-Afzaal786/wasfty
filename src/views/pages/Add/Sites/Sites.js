import React, { useState } from "react";
import Select from "react-select";
import { selectThemeColors } from "@utils";
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

const colourOptions = [
  { value: "ocean", label: "Ocean" },
  { value: "blue", label: "Blue" },
  { value: "purple", label: "Purple" },
  { value: "red", label: "Red" },
  { value: "orange", label: "Orange" },
];

function Sites() {

  const [user, setUser] = useState({
    name: "",
    select: "",
    siteTypes: ""
  });

    //let name, value;
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
                    <Label className="form-label" for="nameMulti">
                      Name *
                    </Label>
                    <Input
                    onChange={(e) => handleChange("name", e.target.value)}
                      type="text"
                      name={user.name}
                      id="nameMulti"
                      placeholder="Name"
                    />
                    <div className="my-2">
                      <Label className="form-label" for="select-lg">
                        Select Large
                      </Label>
                      <Input
                      onChange={(e) => handleChange("select", e.target.value)}
                        type="select"
                        name={user.select}
                        bsSize="lg"
                        id="select-lg"
                      >
                        <option>Pulp Fiction</option>
                        <option>Nightcrawler</option>
                        <option>Donnie Darko</option>
                      </Input>
                    </div>
                    <Label className="form-label">Site types</Label>
                    <Select
                    onChange={(e) => handleChange("siteType", e)}
                    name={user.siteTypes}
                      theme={selectThemeColors}
                      className="react-select"
                      classNamePrefix="select"
                      options={colourOptions}
                      //isClearable={false}
                    />
                    <div className="d-flex flex-column mt-1">
                      <Label
                        for="switch-success"
                        className="form-check-label mb-50"
                      >
                        Major site
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
                    <div className="d-flex flex-column mt-1">
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

export default Sites;
