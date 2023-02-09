import React from 'react';
import {useParams} from "react-router-dom";

function Invoice(props) {
    let invoiceId = useParams().invoiceId;
    let invoice = invoiceId ==1 ?"Google ": "Apple"
    return (
        <div className="col-11 text-start">
            Invoi #{invoiceId} for {invoice}
        </div>
    );
}

export default Invoice;