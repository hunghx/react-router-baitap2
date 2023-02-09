import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Header from "./components/Header";
import {Route, Routes} from "react-router-dom";
import Invoice from "./components/Invoice";
import Expenses from "./components/Expenses";
import NewInvoice from "./components/NewInvoice";
import Invoices from "./components/Invoices";
import InvoiceIndex from "./components/InvoiceIndex";



function App() {
    return (
        <div className="App">

            <Routes>
                <Route path={'/'} element={<Header/>}/>
                <Route path={'/invoices'} element={<Invoices/>}>
                    <Route index element={<InvoiceIndex/>}/>
                    <Route path={'new'} element={<NewInvoice/>}/>
                    <Route path={'/invoices/:invoiceId'} element={<Invoice/>}/>
                </Route>
                <Route path={'/expenses'} element={<Expenses/>}/>

            </Routes>

        </div>

    );
}

export default App;
