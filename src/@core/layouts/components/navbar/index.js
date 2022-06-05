// ** React Imports
import { Fragment } from 'react'
import * as Icon from "react-feather";
//import { useLocation } from 'react-router-dom';
import {
  NavItem,
  NavLink
} from "reactstrap";
// ** Custom Components
import NavbarUser from './NavbarUser'
//import NavbarBookmarks from './NavbarBookmarks'

const ThemeNavbar = props => {
  // ** Props
  const { skin, setSkin, setMenuVisibility } = props
    //  const location = useLocation()
    //  console.log(location,"Location")
  return (
    <Fragment>
      <div className="bookmark-wrapper d-flex align-items-center">
        <ul className="navbar-nav d-xl-none">
          <NavItem className="mobile-menu me-auto">
            <NavLink
              className="nav-menu-main menu-toggle hidden-xs is-active"
              onClick={() => setMenuVisibility(true)}
            >
              <Icon.Menu className="ficon" />
            </NavLink>
            
          </NavItem>
        </ul>
        {/* <ul>
          <h2>{location.pathname}</h2>
        </ul> */}
      </div>
      <NavbarUser skin={skin} setSkin={setSkin} />
    </Fragment>
  );
}

export default ThemeNavbar
