import { lazy } from 'react'
const MainWasfaty = lazy(() => import('../../views/wasfaty/MainWasfaty'))
const WasfatyRoutes = [
{
  
    element: <MainWasfaty />,
    path: '/add/user'
  
}
]

export default WasfatyRoutes
