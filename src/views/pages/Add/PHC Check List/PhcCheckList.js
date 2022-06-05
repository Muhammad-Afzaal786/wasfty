import React, { useState } from "react";
import { selectThemeColors } from "@utils";
import Select from "react-select";
import { Check, X, PlusSquare, MinusSquare } from "react-feather";

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
const CustomLabel = ({ htmlFor }) => {
  return (
    <Label className="form-check-label" htmlFor={htmlFor}>
      <span className="switch-icon-left">
        <Check size={14} />
      </span>
      <span className="switch-icon-right">
        <X size={14} />
      </span>
    </Label>
  );
};

function PhcCheckList() {
  const [user, setUser] = useState({
    region: "",
    PhcName: "",
    city: "",
    phone: "",
    PhcRepre: "",
    position: "",
  });
  const [switchVal, setSwitchVal] = useState(false);
  const [switchTog, setSwitchTog] = useState(false);
  const [incrVal, setIncVal] = useState(0);
  console.log(switchVal, "Value");
  // let name, value;
  const handleChange = (name, value) => {
    // console.log("event.target.name", event.target.name);
    // name = event.target.name;
    // value = event.target.value;

    setUser({ ...user, [name]: value });
  };
  console.log(user);
  const Toggler = () => {
    // switchVal ? setSwitchVal(false) : setSwitchVal(true);
    setSwitchVal(!switchVal);
  };
  console.log("switchVal", switchVal);
  const Toggler2 = () => {
    switchTog ? setSwitchTog(false) : setSwitchTog(true);
  };
  const incVal = () => {
    setIncVal(incrVal + 1);
  };
  const decVal = () => {
    if (incrVal > 0) {
      setIncVal(incrVal - 1);
    } else {
      setIncVal(0);
    }
  };
  return (
    <>
      <Row>
        <Col>
          <Card className="mb-4">
            <CardBody>
              <Form>
                <Row>
                  <Col className="mb-1" md="6" sm="12">
                    <Label className="form-label">Regions *</Label>
                    <Select
                      name="regions"
                      value={user.region}
                      onChange={(e) => handleChange("regions", e)}
                      theme={selectThemeColors}
                      className="react-select"
                      classNamePrefix="select"
                      options={colourOptions}
                      isClearable={false}
                    />
                  </Col>
                  <Col className="mb-1" md="6" sm="12">
                    <Label className="form-label">PHC Name *</Label>
                    <Select
                      name="phcName"
                      value={user.PhcName}
                      onChange={(e) => handleChange("PhcName", e)}
                      theme={selectThemeColors}
                      className="react-select"
                      classNamePrefix="select"
                      options={colourOptions}
                      isClearable={false}
                    />
                  </Col>
                  <Col md="6" sm="12" className="mb-1">
                    <Label className="form-label" for="cityMulti">
                      City *
                    </Label>
                    <Input
                      type="text"
                      name="cite"
                      value={user.cite}
                      id="citeMulti"
                      placeholder="cite"
                      onChange={handleChange}
                    />
                  </Col>

                  <Col md="6" sm="12" className="mb-1">
                    <Label className="form-label" for="EmailMulti">
                      Name of PHC representative *
                    </Label>
                    <Input
                      type="text"
                      name="PhcRepre"
                      value={user.PhcRepre}
                      onChange={handleChange}
                      id="PhoneMulti"
                      placeholder="PHC Representative"
                    />
                  </Col>
                  <Col md="6" sm="12" className="mb-1">
                    <Label className="form-label" for="cityMulti">
                      Position *
                    </Label>
                    <Input
                      type="text"
                      name="postion"
                      value={user.position}
                      id="citeMulti"
                      placeholder="Position"
                      onChange={handleChange}
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
                      onChange={handleChange}
                      id="PhoneMulti"
                      placeholder="Phone"
                    />
                  </Col>
                  <Col>
                    <div
                      className="d-flex flex-row justify-content-between align-items-center my-2"
                      style={{
                        borderTop: "1px dashed #EBEBEB",
                        borderBottom: "1px dashed #EBEBEB",
                        padding: "10px 0px",
                      }}
                    >
                      <Label
                        for="icon-success"
                        className="form-check-label mb-50 text-black"
                      >
                        Vasfaty availability
                      </Label>
                      <div className="form-switch form-check-success">
                        <Input
                          onClick={Toggler}
                          type="switch"
                          // defaultChecked
                          id="icon-success"
                          name="icon-success"
                        />
                        <CustomLabel htmlFor="icon-success" />
                      </div>
                    </div>
                  </Col>
                </Row>

                {switchVal && (
                  <Row>
                    <Col className="mb-1" md="6" sm="12">
                      <Label className="form-label">Wasfaty availability</Label>
                      <Select
                        name="phcName"
                        value={user.PhcName}
                        onChange={(e) => handleChange("PhcName", e)}
                        theme={selectThemeColors}
                        className="react-select"
                        classNamePrefix="select"
                        options={colourOptions}
                        isClearable={false}
                      />
                    </Col>
                    <Col className="mb-1" md="6" sm="12">
                      <Label className="form-label">
                        Date and time the incident *
                      </Label>
                      <Input
                        type="date"
                        name="date"
                        onChange={handleChange}
                        id="PhoneMulti"
                        placeholder="Phone"
                      />
                    </Col>
                    <Col className="mb-1" md="6" sm="12">
                      <Label className="form-label">
                        Nearest pharmacy from PHC serve wasfaty
                      </Label>
                      <Select
                        name="phcName"
                        onChange={(e) => handleChange("PhcName", e)}
                        theme={selectThemeColors}
                        className="react-select"
                        classNamePrefix="select"
                        options={colourOptions}
                        isClearable={false}
                      />
                    </Col>
                  </Row>
                )}

                <Row>
                  <Col>
                    <div
                      className="d-flex flex-row justify-content-between align-items-center my-2"
                      style={{
                        borderTop: "1px dashed #EBEBEB",
                        borderBottom: "1px dashed #EBEBEB",
                        padding: "10px 0px",
                      }}
                    >
                      <Label
                        for="icon-success"
                        className="form-check-label mb-50 text-black"
                      >
                        Does Pharmacy Still Despense Medications At The Moment
                        Of Filling This Survey?
                      </Label>
                      <div className="form-switch form-check-success">
                        <Input
                          onClick={Toggler2}
                          type="switch"
                          defaultChecked
                          id="icon-success"
                          name="icon-success2"
                        />
                        <CustomLabel htmlFor="icon-success2" />
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div
                      className="d-flex flex-row justify-content-between align-items-center my-2"
                      style={{
                        borderTop: "1px dashed #EBEBEB",
                        borderBottom: "1px dashed #EBEBEB",
                        padding: "10px 0px",
                      }}
                    >
                      <Label
                        for="icon-success"
                        className="form-check-label mb-50 text-black"
                      >
                        Enter Number Of Pharmacists
                      </Label>
                      <div className="form-switch form-check-success d-flex">
                        <span>
                          <PlusSquare onClick={incVal} />
                        </span>
                        <span
                          style={{
                            border: "1px solid grey",
                            padding: "0px 15px",
                          }}
                        >
                          {incrVal}
                        </span>
                        <span>
                          <MinusSquare onClick={decVal} />
                        </span>
                      </div>
                    </div>
                  </Col>
                </Row>

                {switchTog && (
                  <Row>
                    <h3>PHC pharmacists information 1</h3>
                    <Col md="6" sm="12" className="mb-1">
                      <Label className="form-label" for="nameMulti">
                        Name Of Pharmacists
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
                    <Col className="mb-1" md="6" sm="12">
                      <Label className="form-label">MOH Badge Number</Label>
                      <Select
                        theme={selectThemeColors}
                        className="react-select"
                        classNamePrefix="select"
                        defaultValue={colourOptions[0]}
                        options={colourOptions}
                        isClearable={false}
                      />
                    </Col>
                    <Col md="6" sm="12" className="mb-1">
                      <span>Gender</span>
                      <div className="demo-inline-spacing">
                        <div className="form-check">
                          <Input
                            type="radio"
                            id="ex1-active"
                            name="ex1"
                            defaultChecked
                          />
                          <Label className="form-check-label" for="ex1-active">
                            Male
                          </Label>
                        </div>
                        <div className="form-check">
                          <Input type="radio" name="ex1" id="ex1-inactive" />
                          <Label
                            className="form-check-label"
                            for="ex1-inactive"
                          >
                            Female
                          </Label>
                        </div>
                      </div>
                    </Col>
                    <Col className="mb-1" md="6" sm="12">
                      <Label className="form-label">Nationality</Label>
                      <Select
                        theme={selectThemeColors}
                        className="react-select"
                        classNamePrefix="select"
                        defaultValue={colourOptions[0]}
                        options={colourOptions}
                        isClearable={false}
                      />
                    </Col>
                    <Col className="mb-1" md="6" sm="12">
                      <Label className="form-label">Age</Label>
                      <Select
                        theme={selectThemeColors}
                        className="react-select"
                        classNamePrefix="select"
                        defaultValue={colourOptions[0]}
                        options={colourOptions}
                        isClearable={false}
                      />
                    </Col>
                    <Col md="6" sm="12" className="mb-1">
                      <Label className="form-label" for="nameMulti">
                        SCFHS Number
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
                    <Col className="mb-1" md="6" sm="12">
                      <Label className="form-label">Job Title</Label>
                      <Select
                        theme={selectThemeColors}
                        className="react-select"
                        classNamePrefix="select"
                        defaultValue={colourOptions[0]}
                        options={colourOptions}
                        isClearable={false}
                      />
                    </Col>
                    <Col className="mb-1" md="6" sm="12">
                      <Label className="form-label">Qualification</Label>
                      <Select
                        theme={selectThemeColors}
                        className="react-select"
                        classNamePrefix="select"
                        defaultValue={colourOptions[0]}
                        options={colourOptions}
                        isClearable={false}
                      />
                    </Col>
                    <Col className="mb-1" md="6" sm="12">
                      <Label className="form-label">License Status</Label>
                      <Select
                        theme={selectThemeColors}
                        className="react-select"
                        classNamePrefix="select"
                        defaultValue={colourOptions[0]}
                        options={colourOptions}
                        isClearable={false}
                      />
                    </Col>
                  </Row>
                )}
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
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default PhcCheckList;
