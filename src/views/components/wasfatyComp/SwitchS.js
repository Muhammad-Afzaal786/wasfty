// ** Icons Imports
import { Check, X } from "react-feather"

// ** Reactstrap Imports
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardText,
  Input,
  Label,
} from "reactstrap"

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
  )
}

const SwitchIcons = () => {
  return (
    <Card>
      <CardBody style={{ borderBottom: "1px dashed grey" }}>
        <div className="d-flex flex-row justify-content-between alighn-items-center">
          <div>
            <p>
              Does Pharmacy Still Despense Medications At The Moment Of Filling
              This Survey?
            </p>
          </div>
          <div className="form-switch form-check-success">
            <Input
              type="switch"
              defaultChecked
              id="icon-success"
              name="icon-success"
            />
            <CustomLabel htmlFor="icon-success" />
          </div>
        </div>
      </CardBody>
    </Card>
  )
}
export default SwitchIcons
