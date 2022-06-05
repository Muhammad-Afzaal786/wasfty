// ** Reactstrap Imports
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardText,
  Input,
} from "reactstrap"

const TextareaDefault = () => {
  return (
    <Card>
      
      <CardBody>
       
        <Input
          type="textarea"
          name="text"
          id="exampleText"
          rows="3"
          placeholder="Textarea"
        />
      </CardBody>
    </Card>
  )
}
export default TextareaDefault
