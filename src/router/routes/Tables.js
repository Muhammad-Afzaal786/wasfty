import { lazy } from 'react'

//const Reactstrap = lazy(() => import('../../views/tables/reactstrap'))
const DTBasic = lazy(() => import('../../views/tables/data-tables/basic'))
//const DTAdvance = lazy(() => import('../../views/tables/data-tables/advance'))

const TablesRoutes = [
  
  {
    path: '/datatables/basic',
    element: <DTBasic />
  },

]

export default TablesRoutes
