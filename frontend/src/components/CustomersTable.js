import useCustomersStore from '../stores/customersStore';
import CustomerRow from './CustomerRow';

export default function CustomersTable() {
  const customersStore = useCustomersStore();

  return (
    <div>
        <table>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Membership</th>
            <th>Expiration Date</th>
            <th>action</th>
          </tr>
          {customersStore.customers && customersStore.customers.map(customer => (
            <CustomerRow customer={customer} key={customer._id} />
          ))}
        </table>
    </div>
  )
}
