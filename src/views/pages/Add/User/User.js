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
const colorOptions = [
  { value: "ocean", label: "Ocean", color: "#00B8D9", isFixed: true },
  { value: "blue", label: "Blue", color: "#0052CC", isFixed: true },
  { value: "purple", label: "Purple", color: "#5243AA", isFixed: true },
  { value: "red", label: "Red", color: "#FF5630", isFixed: false },
  { value: "orange", label: "Orange", color: "#FF8B00", isFixed: false },
  { value: "yellow", label: "Yellow", color: "#FFC400", isFixed: false },
];

function User() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    roles: "",
    catagorySelect: "",
    phone: "",
    regions: "",
    sites: "",
    modulesSelect: "",
  });

  // let name, value;
  const handleChange = (name, value) => {
    // console.log("event.target.name", event.target.name);
    // name = event.target.name;
    // value = event.target.value;

    setUser({ ...user, [name]: value });
  };
  console.log(user);

  // const = curtomop=[{label:"dsafhdsa",value:"dsafha"},{label:"dsafhdsa",value:"dsafha"},{label:"dsafhdsa",value:"dsafha"},{label:"dsafhdsa",value:"dsafha"},{label:"dsafhdsa",value:"dsafha"},{label:"dsafhdsa",value:"dsafha"},{label:"dsafhdsa",value:"dsafha"},{label:"dsafhdsa",value:"dsafha"},{label:"dsafhdsa",value:"dsafha"},]
  return (
    <>
      <Row>
        <Col>
          <Card className="mb-4">
            <CardBody>
              <Form>
                <Row>
                  <Col md="6" sm="12" className="mb-1">
                    <Label className="form-label" for="nameMulti">
                      Name *
                    </Label>
                    <Input
                      type="text"
                      name="name"
                      value={user.name}
                      id="nameMulti"
                      placeholder="Name"
                      onChange={(e) => handleChange("name", e.target.value)}
                    />
                  </Col>
                  <Col md="6" sm="12" className="mb-1">
                    <Label className="form-label" for="lastNameMulti">
                      Email *
                    </Label>
                    <Input
                      type="email"
                      name="email"
                      value={user.email}
                      id="lastNameMulti"
                      placeholder="Email"
                      onChange={(e) => handleChange("email", e.target.value)}
                    />
                  </Col>
                  <Col md="6" sm="12" className="mb-1">
                    <Label className="form-label" for="cityMulti">
                      Password *
                    </Label>
                    <Input
                      type="Password"
                      name="password"
                      value={user.password}
                      id="PasswordMulti"
                      placeholder="Password"
                      onChange={(e) => handleChange("password", e.target.value)}
                    />
                  </Col>
                  <Col className="mb-1" md="6" sm="12">
                    <Label className="form-label">Roles *</Label>
                    <Select
                      name="roles"
                      value={user.roles}
                      onChange={(e) => handleChange("roles", e)}
                      theme={selectThemeColors}
                      className="react-select"
                      classNamePrefix="select"
                      options={colourOptions}
                      isClearable={false}
                      isMulti
                    />
                  </Col>
                  <Col className="mb-1" md="6" sm="12">
                    <Label className="form-label">Category *</Label>
                    <Select
                      name="catagorySelect"
                      onChange={(e) => handleChange("catagorySelect", e)}
                      value={user.catagorySelect}
                       theme={selectThemeColors}
                      className="react-select"
                      classNamePrefix="select"
                      
                       options={colourOptions}
                      isClearable={false}
                    />
                  </Col>
                  <Col md="6" sm="12" className="mb-1">
                    <Label className="form-label" for="EmailMulti">
                      Phone No *
                    </Label>
                    <Input
                      type="phone"
                      name="phone"
                      value={user.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      id="PhoneMulti"
                      placeholder="Phone"
                    />
                  </Col>
                  <Col className="mb-1" md="6" sm="12">
                    <Label className="form-label">Regions</Label>
                    <Select
                      name="regions"
                      value={user.regions}
                      onChange={(e) => handleChange("regions", e)}
                      isClearable={false}
                      theme={selectThemeColors}
                      defaultValue={[colorOptions[2], colorOptions[3]]}
                      isMulti
                      // options={curtomop}
                      className="react-select"
                      classNamePrefix="select"
                      options={colourOptions}
                    />
                  </Col>
                  <Col className="mb-1" md="6" sm="12">
                    <Label className="form-label">Sites</Label>
                    <Select
                      name="sites"
                      value={user.sites}
                      onChange={(e) => handleChange("sites", e)}
                      isClearable={false}
                      theme={selectThemeColors}
                      // defaultValue={[colorOptions[2], colorOptions[3]]}
                      isMulti
                      options={colorOptions}
                      className="react-select"
                      classNamePrefix="select"
                    />
                  </Col>
                  <Col className="mb-1" md="6" sm="12">
                    <Label className="form-label">Modules *</Label>
                    <Select
                      name="modulesSelect"
                      value={user.modulesSelect}
                      onChange={(e) => handleChange("modulesSelect", e)}
                      isClearable={false}
                      theme={selectThemeColors}
                      defaultValue={[colorOptions[0], colorOptions[3]]}
                      isMulti
                      options={colorOptions}
                      className="react-select"
                      classNamePrefix="select"
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

export default User;
