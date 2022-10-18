import React from 'react';
import image from '../assets/images/Logo.png';
import ContentWrapper from './ContentWrapper';
import CategoriesInDb from './CategoriesInDb';
import LastProductInDb from './LastProductInDb';
import ContentRowData from './ContentRowData';
import DetailProduct from './DetailProduct';
import DetailUser from './DetailUser';
import ProductsByCategory from './ProductsByCategory';
import NotFound from './NotFound';
import {Link, Route, Switch} from 'react-router-dom';

function SideBar(){
    return(
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-100" src={image} style={{borderRadius: 10 + 'px'}} alt="Logo Optica RIFF"/>
                    </div>
                </a>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0"/>

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard - OPTICA RIFF</span>
                    </Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider"/>

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">Actions</div>

                {/*<!-- Nav Item - Pages -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/CategoriesInDb">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Pages</span>
                    </Link>
                </li>

                {/*<!-- Nav Item - Charts -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/LastProductInDb">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Charts</span>
                    </Link>
                </li>

                {/*<!-- Nav Item - Tables -->*/}
                <li className="nav-item nav-link">
                    <Link className="nav-link" to="/ContentRowData">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Tables</span>
                    </Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>
            {/*<!-- End of Sidebar -->*/}
            <Switch>
                <Route exact path="/" component={ContentWrapper}></Route>
                <Route path="/CategoriesInDb" component={CategoriesInDb}></Route>
                <Route path="/LastProductInDb" component={LastProductInDb}></Route>
                <Route path="/ContentRowData" component={ContentRowData}></Route>
                <Route path="/DetailProduct" component={DetailProduct}></Route>
                <Route path="/DetailUser/:id" component={DetailUser}></Route>
                <Route path="/ProductsByCategory/:id" component={ProductsByCategory}></Route>
                <Route component={NotFound} />
            </Switch>
        </React.Fragment>
    )
}
export default SideBar;