// ** Third Party Components
import Select from 'react-select'

// ** Utils
import { selectThemeColors } from '@utils'

// ** Reactstrap Imports
import { Card,  CardBody, Row, Col, Label } from 'reactstrap'

const colourOptions = [
  { value: 'ocean', label: 'Ashir Hralth Affairs' },
  { value: 'blue', label: 'Blue' },
  { value: 'Green', label: 'Green' },
 
]

const SelectReact = () => {
  return (
    <Card className='mb-0'>
      
      <CardBody>
       
        <Row>
          <Col md='6' sm='12'>
            <Label className='form-label'>Region</Label>
            <Select
              theme={selectThemeColors}
              className='react-select'
              classNamePrefix='select'
              defaultValue={colourOptions[0]}
              options={colourOptions}
              isClearable={false}
            />
          </Col>
          <Col  md='6' sm='12'>
            <Label className='form-label'>PHC Name</Label>
            <Select
              theme={selectThemeColors}
              className='react-select'
              classNamePrefix='select'
              defaultValue={colourOptions[1]}
              options={colourOptions}
              isClearable={false}
            />
          </Col>
         
        </Row>
      </CardBody>
    </Card>
  )
}
export default SelectReact
