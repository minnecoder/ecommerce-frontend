import React from 'react'
import AddSupplier from '../components/AddSupplier'
import AddCustomer from '../components/AddCustomer'
import AddProduct from '../components/AddProduct'


export default function Admin() {
    return (
        <div>
            <h1>Admin</h1>
            <AddSupplier />
            <AddCustomer />
            <AddProduct />
        </div>
    )
}
