import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCustomer } from '../slices/customerSlice'

const CustomerView = () => {
    const Customers = useSelector((state)=> state.customers)
    const dispatch = useDispatch()

    const deleteCustomerAction = (index)=>{
        dispatch(deleteCustomer(index))
    }
  return (
    <div>
        Customer List
        <ul>
            {Customers.map((customer, index)=> (
                <li>{customer}<button onClick={()=> deleteCustomerAction(index)}>Delete</button></li>
            ))}
        </ul>
    </div>
  )
}

export default CustomerView