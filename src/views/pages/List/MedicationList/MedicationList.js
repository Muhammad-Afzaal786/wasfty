import TableWithButtons from "../../../tables/data-tables/basic/TableWithButtons";
import { Fragment } from "react";
import Breadcrumbs from "@components/breadcrumbs";
import { Row, Col } from "reactstrap";
function MedicationList() {
  return (
    <Fragment>
      <Breadcrumbs
        title="Medication List"
        data={[{ title: "Datatables" }, { title: "Medication List" }]}
      />
      <Row>
        <Col sm="12">
          <TableWithButtons />
        </Col>
      </Row>
    </Fragment>
  );
}

export default MedicationList;
