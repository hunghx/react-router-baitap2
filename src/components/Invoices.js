import React from 'react';
import Header from "./Header";
import InvoiceIndex from "./InvoiceIndex";
import {Outlet , NavLink} from "react-router-dom";


function Invoices(props) {
    return (
        <div>
            <Header/>
            <h4>Invoices</h4>
            <NavLink to={"new"}>Create New Invoice</NavLink>
            <div className="row">
                <div className='col-1 border-1 border-dark border-end'>
                    <NavLink className='d-block' to={'1'}>Google</NavLink>
                    <NavLink className='d-block' to={'2'}>Apple</NavLink>
                </div>
                <Outlet/>
            </div>
        </div>
    );
}

export default Invoices;