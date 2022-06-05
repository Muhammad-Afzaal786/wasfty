// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, CardText, Input, Row, Col } from 'reactstrap'

const InputFloating = () => {
    return (
      <Card className='mb-0'>
        <CardBody style={{ borderBottom: "1px dashed grey" }}>
          <Row>
            <Col  md="6" sm="12">
              <div className="form-floating">
                <Input type="text" id="floatingInput" placeholder="City" />
                <label htmlFor="floatingInput">City</label>
              </div>
            </Col>
            <Col md="6" className="mb-3" sm="12">
              <div className="form-floating">
                <Input
                  type="text"
                  id="floatingInput"
                  placeholder="Name of PHC representative"
                />
                <label htmlFor="floatingInput">
                  Name of PHC representative
                </label>
              </div>
            </Col>
            <Col md="6" sm="12">
              <div className="form-floating">
                <Input type="text" id="floatingInput" placeholder="Position" />
                <label htmlFor="floatingInput">Position</label>
              </div>
            </Col>
            <Col md="6" sm="12">
              <div className="form-floating">
                <Input
                  type="number"
                  id="floatingInput"
                  placeholder="Phone Number"
                />
                <label htmlFor="floatingInput">Phone Number"</label>
              </div>
            </Col>
           
          </Row>
        </CardBody>
      </Card>
    )
}
export default InputFloating
