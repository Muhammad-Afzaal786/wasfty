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
            <p>Wasfaty Availability</p>
          </div>
          <div className="form-switch form-check-warning">
            <Input
              type="switch"
              defaultChecked
              id="icon-warning"
              name="icon-warning"
            />
            <CustomLabel htmlFor="icon-warning" />
          </div>
        </div>
      </CardBody>
    </Card>
  )
}
export default SwitchIcons
