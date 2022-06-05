// ** Icons Import
import { FileText, Circle, Square, UserCheck } from "react-feather";

export default [
  {
    id: "add",
    title: "Add",
    icon: <FileText size={20} />,
    children: [
      {
        id: "users",
        title: "Users",
        icon: <Circle size={12} />,
        navLink: "/views/users",
      },
      {
        id: "regions",
        title: "Regions",
        icon: <Circle size={12} />,

        navLink: "/views/_Regions",
      },
      {
        id: "sites",
        title: "Sites",
        icon: <Circle size={12} />,

        navLink: "/views/_sites",
      },
      {
        id: "modules",
        title: "Modules",
        icon: <Circle size={12} />,

        navLink: "/views/_modules",
      },
      {
        id: "medicine",
        title: "Medicine",
        icon: <Circle size={12} />,

        navLink: "/views/_medicine",
      },
      {
        id: "pharmacy audits",
        title: "Pharmacy Audits",
        icon: <Circle size={12} />,
        navLink: "/views/_pharmacyAdits",
      },
      {
        id: "medication list",
        title: "Medication List ",
        icon: <Circle size={12} />,
        navLink: "/views/_medication-list",
      },
      {
        id: "phc checklist",
        title: "PHC Checklist",
        icon: <Circle size={12} />,
        navLink: "/views/_phcChecKList",
      },
      {
        id: "IRS",
        title: "IRS",
        icon: <Circle size={12} />,
        navLink: "/views/irs",
      },
    ],
  },
  {
    id: "list",
    title: "List",
    icon: <UserCheck size={20} />,
    children: [
      {
        id: "medicalList",
        title: "Medical List",
        icon: <Circle size={12} />,

        navLink: "/views/medication-list",
      },
      {
        id: "pharmacy-audits",
        title: "Pharmacy Audits Listing",
        icon: <Circle size={12} />,

        navLink: "/views/Pharmacy-audits-Listing",
      },
      {
        id: "Irs-list",
        title: "IRS List",
        icon: <Circle size={12} />,

        navLink: "/views/Iis-List",
      },
    ],
  },
];
