import React, { useState } from "react";
import { selectThemeColors } from "@utils";
import Select from "react-select";

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

function PharmacyAudits() {
  const [user, setUser] = useState({
    auditMethod: "",
    region: "",
    site: "",
    Prescription: "",
    phone:"",
    latitude:"",
    longitude:""
  });

  const handleChange = (name, value) => {
    // console.log("event.target.name", event.target.name);
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
                  <Col className="mb-1" md="6" sm="12">
                    <Label className="form-label">
                      What is the Audit Method?
                    </Label>
                    <Select
                      name="auditMethod"
                      value={user.auditMethod}
                      onChange={(e) => handleChange("auditMethod", e)}
                      theme={selectThemeColors}
                      className="react-select"
                      classNamePrefix="select"
                      options={colourOptions}
                      isClearable={false}
                      isMulti
                    />
                  </Col>
                  <Col className="mb-1" md="6" sm="12">
                    <Label className="form-label">Region</Label>
                    <Select
                      name="region"
                      value={user.region}
                      onChange={(e) => handleChange("region", e)}
                      theme={selectThemeColors}
                      className="react-select"
                      classNamePrefix="select"
                      options={colourOptions}
                      isClearable={false}
                      isMulti
                    />
                  </Col>
                  <Col className="mb-1" md="6" sm="12">
                    <Label className="form-label">Site</Label>
                    <Select
                      name="site"
                      value={user.site}
                      onChange={(e) => handleChange("site", e)}
                      theme={selectThemeColors}
                      className="react-select"
                      classNamePrefix="select"
                      options={colourOptions}
                      isClearable={false}
                      isMulti
                    />
                  </Col>
                  <Col className="mb-1" md="6" sm="12">
                    <Label className="form-label">Prescription ID</Label>
                    <Select
                      name="prescription"
                      value={user.prescription}
                      onChange={(e) => handleChange("prescription", e)}
                      theme={selectThemeColors}
                      className="react-select"
                      classNamePrefix="select"
                      options={colourOptions}
                      isClearable={false}
                      isMulti
                    />
                  </Col>
                  <Col className="mb-1" md="6" sm="12">
                    <Row className="d-flex align-items-center">
                      <Col className="mb-1" md="4" sm="12">
                        <Label className="form-label" for="EmailMulti">
                          Longitude
                        </Label>
                        <Input
                          type="text"
                          name="longitude"
                          value={user.longitude}
                          onChange={(e) => handleChange("longitude", e.target.value)}
                          id="PhoneMulti"
                          placeholder="Longitude"
                        />
                      </Col>
                      <Col className="mb-1" md="4" sm="12">
                        <Label className="form-label" for="EmailMulti">
                          Latitude
                        </Label>
                        <Input
                          type="text"
                          name="latitude"
                          value={user.latitude}
                          onChange={(e) => handleChange("latitude", e.target.value)}
                          id="PhoneMulti"
                          placeholder="Latitude"
                        />
                      </Col>
                      <Col>
                        <Button.Ripple
                          style={{ backgroundColor: "#24D6CC", color: "black" }}
                          className="round"
                          color="primary"
                          type="submit"
                          onClick={(e) => e.preventDefault()}
                          outline
                        >
                          Location
                        </Button.Ripple>
                      </Col>
                    </Row>
                  </Col>
                  <Col md="6" sm="12" className="mb-1">
                    <Label className="form-label" for="EmailMulti">
                      Phone No *
                    </Label>
                    <Input
                      type="number"
                      name="phone"
                      value={user.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      id="PhoneMulti"
                      placeholder="Phone"
                    />
                  </Col>
                 
                 </Row>
                <div className="d-flex justify-content-end">
                  <Button.Ripple
                    style={{ backgroundColor: "#24D6CC", color: "black" }}
                    className="round"
                    color="primary"
                    type="submit"
                    onClick={(e) => e.preventDefault()}
                    outline
                  >
                    Submit
                  </Button.Ripple>
                </div>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default PharmacyAudits;
