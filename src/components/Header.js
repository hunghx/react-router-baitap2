import React from 'react';
import {NavLink} from "react-router-dom";

function Header(props) {
    return (
        <div>
            <img className="img-fluid" src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Logo-Rikkei.png"
                 alt="cbjdbchbd"/>
            <h3 className="text-danger">Rikkei Academy</h3>
            <div className='d-flex justify-content-center '>
                <NavLink to={"/invoices"} className='px-2 border-end border-dark border-1'>Invoices</NavLink>
                <NavLink to={"/expenses"} className='px-2' >Expenses</NavLink>
            </div>
            <hr/>
        </div>
    );
}

export default Header;