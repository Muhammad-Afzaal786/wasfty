
import React, { useState, Fragment } from "react";
import { selectThemeColors, isObjEmpty } from "@utils";
import Select from "react-select";
import Flatpickr from "react-flatpickr";
const colourOptions = [
  { value: "ocean", label: "Ocean" },
  { value: "blue", label: "Blue" },
  { value: "purple", label: "Purple" },
  { value: "red", label: "Red" },
  { value: "orange", label: "Orange" },
];
// ** Third Party Components
import * as yup from 'yup'
import { useForm, Controller } from 'react-hook-form'
import { ArrowLeft, ArrowRight } from 'react-feather'
import { yupResolver } from '@hookform/resolvers/yup'

// ** Reactstrap Imports
import { Form, Label, Input, Row, Col, Button, FormFeedback } from 'reactstrap'

const defaultValues = {
  email: '',
  username: '',
  password: '',
  confirmPassword: ''
}

const AccountDetails = ({ stepper }) => {
   const [picker, setPicker] = useState(new Date());
  const SignupSchema = yup.object().shape({
    username: yup.string().required(),
    email: yup.string().email().required(),
    // password: yup.string().required(),
    // confirmPassword: yup
    //   .string()
    //   .required()
    //   .oneOf([yup.ref(`password`), null], 'Passwords must match')
  })

  // ** Hooks

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues,
    resolver: yupResolver(SignupSchema)
  })

  const onSubmit = () => {
    if (isObjEmpty(errors)) {
      stepper.next()
    }
  }

  return (
    <Fragment>
      <div className="content-header">
        <h5 className="mb-0">Account Detailsz</h5>
        <small className="text-muted">Enter Your Account Details.</small>
      </div>
      <Form onSubmit={handleSubmit(onSubmit)}>
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
        </Row>
        <Row>
          <Col md="6" className="mb-1">
            <Label className="form-label" for="username">
              Reporter Name
            </Label>
            <Controller
              id="username"
              name="username"
              control={control}
              render={({ field }) => (
                <Input
                  placeholder="johndoe"
                  invalid={errors.username && true}
                  {...field}
                />
              )}
            />
            {errors.username && (
              <FormFeedback>{errors.username.message}</FormFeedback>
            )}
          </Col>
          <Col md="6" className="mb-1">
            <Label className="form-label" for="username">
              Reporter Position
            </Label>
            <Controller
              id="username"
              name="username"
              control={control}
              render={({ field }) => (
                <Input
                  placeholder="johndoe"
                  invalid={errors.username && true}
                  {...field}
                />
              )}
            />
            {errors.username && (
              <FormFeedback>{errors.username.message}</FormFeedback>
            )}
          </Col>
        </Row>

        <Row>
          <Col md="6" className="mb-1">
            <Label className="form-label" for={`email`}>
              Reporter Email
            </Label>
            <Controller
              control={control}
              id="email"
              name="email"
              render={({ field }) => (
                <Input
                  type="email"
                  placeholder="john.doe@email.com"
                  invalid={errors.email && true}
                  {...field}
                />
              )}
            />
            {errors.email && (
              <FormFeedback>{errors.email.message}</FormFeedback>
            )}
          </Col>
          <Col md="6" className="mb-1">
            <Label className="form-label" for="default-picker">
              Date & time of the report
            </Label>
            <Flatpickr
              className="form-control"
              value={picker}
              onChange={(date) => setPicker(date)}
              id="default-picker"
            />
          </Col>
          <Col md="6" className="mb-1">
            <Label className="form-label" for="default-picker">
              Date & time of the incident
            </Label>
            <Flatpickr
              className="form-control"
              value={picker}
              onChange={(date) => setPicker(date)}
              id="default-picker"
            />
          </Col>
        </Row>
        <div className="d-flex justify-content-between">
          <Button color="secondary" className="btn-prev" outline disabled>
            <ArrowLeft
              size={14}
              className="align-middle me-sm-25 me-0"
            ></ArrowLeft>
            <span className="align-middle d-sm-inline-block d-none">
              Previous
            </span>
          </Button>
          <Button type="submit" color="primary" className="btn-next">
            <span className="align-middle d-sm-inline-block d-none">Next</span>
            <ArrowRight
              size={14}
              className="align-middle ms-sm-25 ms-0"
            ></ArrowRight>
          </Button>
        </div>
      </Form>
    </Fragment>
  );
}

export default AccountDetails
