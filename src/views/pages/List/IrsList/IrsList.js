import TableWithButtons from "../../../tables/data-tables/basic/TableWithButtons";
import { Fragment } from "react";
import Breadcrumbs from "@components/breadcrumbs";
import { Row, Col } from "reactstrap";

function IrsList() {
    return (
      <Fragment>
        <Breadcrumbs
          title="Irs-list"
          data={[{ title: "Datatables" }, { title: "Datatables Basic" }]}
        />
        <Row>
          <Col sm="12">
            <TableWithButtons />
          </Col>
        </Row>
      </Fragment>
    );
}

export default IrsList;
