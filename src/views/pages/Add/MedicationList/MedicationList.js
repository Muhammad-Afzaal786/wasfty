import React, { useState } from "react";
import { selectThemeColors } from "@utils";
import Select from "react-select";
import { MoreVertical, X, Plus } from "react-feather";

import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";

import Repeater from "@components/repeater";

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
function MedicationList() {
  const [count, setCount] = useState(1);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const deleteForm = (e) => {
    e.preventDefault();
    e.target.closest("form").remove();
  };
  const [show, setShow] = useState(true);

  return (
    <>
      <Row>
        <Col>
          <Card className="mb-4">
            <CardBody>
              <div
                className="d-flex justify-content-between align-items-center"
                style={{
                  borderBottom: "1.5px dashed #EBEBEB",
                }}
              >
                <div>
                  <small className="m-0 text-black">Name of auditor </small>
                  <h1 className="text-black">M.Afzal</h1>
                </div>
                <div>
                  <MoreVertical />
                </div>
              </div>

              <Row>
                <Col className="mb-1" md="6" sm="12">
                  <Label className="form-label">Site</Label>
                  <Select
                    name="phcName"
                    theme={selectThemeColors}
                    className="react-select"
                    classNamePrefix="select"
                    options={colourOptions}
                    isClearable={false}
                  />
                </Col>
                <Col className="mb-1" md="6" sm="12">
                  <Label className="form-label">Region</Label>
                  <Select
                    name="phcName"
                    theme={selectThemeColors}
                    className="react-select"
                    classNamePrefix="select"
                    options={colourOptions}
                    isClearable={false}
                  />
                </Col>
                <Col className="mb-1" md="6" sm="12">
                  <Label className="form-label">Medication List</Label>
                  <Select
                    name="phcName"
                    theme={selectThemeColors}
                    className="react-select"
                    classNamePrefix="select"
                    options={colourOptions}
                    isClearable={false}
                  />
                </Col>
                <Col className="mb-1" md="6" sm="12">
                  <Row className="d-flex align-items-center">
                    <Col className="mb-1" md="3" sm="6">
                      <Form>
                        <span style={{ marginBottom: "5px" }}>
                          Available in pharmacy
                        </span>
                        <div className="d-flex gap-1">
                          <div className="form-check">
                            <Input
                              type="radio"
                              id="ex1-active"
                              name="ex1"
                              defaultChecked
                            />
                            <Label
                              className="form-check-label"
                              for="ex1-active"
                            >
                              Yes
                            </Label>
                          </div>
                          <div className="form-check">
                            <Input type="radio" name="ex1" id="ex1-inactive" />
                            <Label
                              className="form-check-label"
                              for="ex1-inactive"
                            >
                              No
                            </Label>
                          </div>
                        </div>
                      </Form>
                    </Col>
                    <Col className="mb-1" md="3" sm="6">
                      <Form>
                        <p style={{ marginBottom: "5px" }}>
                          Low stock in shelf
                        </p>
                        <div className="d-flex gap-1">
                          <div className="form-check">
                            <Input
                              type="radio"
                              id="ex1-active"
                              name="ex1"
                              defaultChecked
                              onClick={() => setShow(true)}
                            />
                            <Label
                              className="form-check-label"
                              for="ex1-active"
                            >
                              Yes
                            </Label>
                          </div>
                          <div className="form-check">
                            <Input
                              type="radio"
                              name="ex1"
                              id="ex1-inactive"
                              onClick={() => setShow(false)}
                            />
                            <Label
                              className="form-check-label"
                              for="ex1-inactive"
                            >
                              No
                            </Label>
                          </div>
                        </div>
                      </Form>
                    </Col>

                    <Col className="mb-1" md="3" sm="6">
                      {show && (
                        <Form>
                          <p style={{ marginBottom: "5px" }}>High in demand</p>
                          <div className="d-flex gap-1">
                            <div className="form-check">
                              <Input
                                type="radio"
                                id="ex1-active"
                                name="ex1"
                                defaultChecked
                              />
                              <Label
                                className="form-check-label"
                                for="ex1-active"
                              >
                                Yes
                              </Label>
                            </div>
                            <div className="form-check">
                              <Input
                                type="radio"
                                name="ex1"
                                id="ex1-inactive"
                              />
                              <Label
                                className="form-check-label"
                                for="ex1-inactive"
                              >
                                No
                              </Label>
                            </div>
                          </div>
                        </Form>
                      )}
                    </Col>

                    <Col className="mb-1" md="3" sm="6">
                      <div className="d-flex gap-1">
                        <div>
                          <FaPlusCircle
                            style={{ fontSize: "2rem", color: "#45B85E" }}
                          />
                        </div>
                        <div>
                          <FaMinusCircle
                            style={{ fontSize: "2rem", color: "#EB5757" }}
                          />
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>

              <Repeater count={count}>
                {(i) => (
                  <Form key={i}>
                    <Row className="justify-content-between align-items-center">
                      <Col md={4} className="mb-md-0 mb-1">
                        <Label className="form-label" for={`item-name-${i}`}>
                          Item Name
                        </Label>
                        <Input
                          type="text"
                          id={`item-name-${i}`}
                          placeholder="Vuexy Admin Template"
                        />
                      </Col>
                      <Col md={2} className="mb-md-0 mb-1">
                        <Label className="form-label" for={`cost-${i}`}>
                          Cost
                        </Label>
                        <Input
                          type="number"
                          id={`cost-${i}`}
                          placeholder="32"
                        />
                      </Col>
                      <Col md={2} className="mb-md-0 mb-1">
                        <Label className="form-label" for={`quantity-${i}`}>
                          Quantity
                        </Label>
                        <Input
                          type="number"
                          id={`quantity-${i}`}
                          placeholder="1"
                        />
                      </Col>
                      <Col md={2} className="mb-md-0 mb-1">
                        <Label className="form-label" for={`price-${i}`}>
                          Price
                        </Label>
                        <input
                          readOnly
                          disabled
                          value="$32"
                          placeholder="$32"
                          id={`price-${i}`}
                          className="form-control-plaintext"
                        />
                      </Col>
                      <Col md={2}>
                        <Button
                      
                          
                      className="btn-icon" color="transparent">
                        
                         <FaMinusCircle
                         onClick={deleteForm}
                            style={{ fontSize: "2rem", color: "#EB5757" }}
                          />
                        </Button>
                      </Col>
                      <Col sm={12}>
                        <hr />
                      </Col>
                    </Row>
                  </Form>
                )}
              </Repeater>
              <Col className="d-flex justify-content-end">
                <Button className="btn-icon" color="transparent">
                  <FaPlusCircle
                    onClick={increaseCount}
                    style={{ fontSize: "2rem", color: "#45B85E" }}
                  />
                </Button>
              </Col>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default MedicationList;
