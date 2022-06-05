import React from "react"
import SelectReact from "../components/wasfatyComp/Select"
import InputFloating from "../components/wasfatyComp/Input"
import Switch from '../components/wasfatyComp/Switch'
import TextArea from "../components/wasfatyComp/TextArea"
import { Card, CardBody, CardText } from "reactstrap"
import SwitchS from '../components/wasfatyComp/SwitchS'
//import IncreDecr  from '../components/wasfatyComp/IncreDecr'
function MainWasfaty() {
  return (
    <div>
      <Card >
        <CardBody>
          <SelectReact />
          <InputFloating />
          <Switch />
          <TextArea />
          <SwitchS />
         
        </CardBody>
      </Card>
    </div>
  )
}

export default MainWasfaty
