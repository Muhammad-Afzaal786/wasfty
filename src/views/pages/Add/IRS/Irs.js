// ** React Imports
import { Fragment } from "react";

// ** Reactstrap Imports
import { Row, Col } from "reactstrap";

// ** Demo Components

import WizardHorizontal from "./WizardHorizontal";
// ** Custom Components
import BreadCrumbs from "@components/breadcrumbs";

function Irs() {
  return (
    <Fragment>
      <BreadCrumbs
        title="Form Wizard"
        data={[{ title: "Form" }, { title: "Form Wizard" }]}
      />
      <Row>
        <Col sm="12">
        <WizardHorizontal/>
        </Col>
      </Row>
    </Fragment>
  );
}

export default Irs;
