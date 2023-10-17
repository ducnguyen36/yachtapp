import { useEffect } from 'react';
import CustomersTable from '../components/CustomersTable';
import UpdateCustomer from '../components/UpdateCustomer';
import AddCustomer from '../components/AddCustomer';
import useCustomersStore from '../stores/customersStore';

export default function CustomersPage() {
  //store
  const customersStore = useCustomersStore();

  //useState

  //useEffect
  useEffect(() => {
    customersStore.fetchCustomers();
  }, []);
  
  //functions

  return (
    <div className="App">
      <CustomersTable />
      {customersStore.updateCustomerForm._id? <UpdateCustomer /> : <AddCustomer />}
      
    </div>
  );
}
