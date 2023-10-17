
import useCustomersStore from '../stores/customersStore';

export default function CustomerRow({ customer }) {
  const customersStore = useCustomersStore(store => {
    return {
      deleteCustomer: store.deleteCustomer,
      toggleUpdateCustomerForm: store.toggleUpdateCustomerForm
    }
  });
  return (
    <tr key={customer._id}>
      <td>{customer.firstName} {customer.lastName}</td>
      <td>{customer.email}</td>
      <td>{customer.membership}</td>
      <td>{customer.expiredMembershipDate}</td>
      <td>
        <button onClick={() => customersStore.deleteCustomer(customer._id)}>Delete</button>
        <button onClick={() => customersStore.toggleUpdateCustomerForm(customer)}>Update</button>
      </td> 
    </tr>
  )
}
