import { lazy } from "react";
const Irs = lazy(() => import("../../views/pages/Add/IRS/Irs"));
const Medication_List = lazy(() => import("../../views/pages/Add/MedicationList/MedicationList"));
const Medicine = lazy(() => import("../../views/pages/Add/Medicine/Medicine"));
const Modules = lazy(() => import("../../views/pages/Add/Modules/Modules"));
const PharmacyAdits = lazy(() => import("../../views/pages/Add/Pharmacy Adits/PharmacyAudits"));
const PhcChecKList = lazy(() => import("../../views/pages/Add/PHC Check List/PhcCheckList"));
const Regions = lazy(() => import("../../views/pages/Add/Regions/Regions"));
const Sites = lazy(() => import("../../views/pages/Add/Sites/Sites"));
const Users = lazy(() => import("../../views/pages/Add/User/User"));

const AddRoutes = [
  {
    element: <Irs />,
    path: "/views/irs",
  },
  {
    element: <Medication_List />,
    path: "/views/_medication-list",
  },
  {
    element: <Medicine />,
    path: "/views/_medicine",
  },
  {
    element: <Modules />,
    path: "/views/_modules",
  },
  {
    element: <PharmacyAdits />,
    path: "/views/_pharmacyAdits",
  },
  {
    element: <PhcChecKList />,
    path: "/views/_phcChecKList",
  },
  {
    element: <Regions />,
    path: "/views/_Regions",
  },
  {
    element: <Sites />,
    path: "/views/_sites",
  },
  {
    element: <Users />,
    path: "/views/users",
  },
];
export default AddRoutes;