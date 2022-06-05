import { lazy } from "react";
const MedicationList = lazy(() => import("../../views/pages/List/MedicationList/MedicationList")
);
const PharmacyAdits = lazy(() => import("../../views/pages/List/PharmacyAudits/PharmacyAdits")
);
const IrsList = lazy(() => import("../../views/pages/List/IrsList/IrsList"));
//const Pagination = lazy(() => import("../../views/pages/List/Pagination"));

const ListRoutes = [
  {
    element: <MedicationList />,
    path: "/views/medication-list",
  },
  {
    element: <PharmacyAdits />,
    path: "/views/Pharmacy-audits-Listing",
  },
  {
    element: <IrsList />,
    path: "/views/Iis-List",
  },
];
export default ListRoutes;
