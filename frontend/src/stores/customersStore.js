import { create } from 'zustand';
import axios from 'axios';

//create customer store
const useCustomersStore = create((set) => ({
    customers: [],
    
    createCustomer: {
      firstName: '',
      lastName: '',
      email: '',
      membership: '',
      expiredMembershipDate: ''
    },

    updateCustomerForm: {
      _id: null,
      firstName: '',
      lastName: '',
      email: '',
      membership: '',
      expiredMembershipDate: ''
    },

    fetchCustomers: async () => {
        try {
            const res = await axios.get('/customers');
            set({customers: res.data});
            console.log(res.data);
          } catch (error) {
            console.log(error);
          }
    },

    handleCreateCustomerField: async (e) => {
        const { name, value } = e.target;
    
       
        set( state =>  ({
            createCustomer: {
                ...state.createCustomer,
                [name]: value
            }
        }))
    },

    addCustomer: async (e) => {
        e.preventDefault();
        try {
          const { createCustomer, customers } = useCustomersStore.getState();
          const res = await axios.post('/customers', createCustomer);
          console.log(res.data);
          //update state and clear form
          set({
            customers: [...customers, res.data.newCustomer],
            createCustomer: {
              firstName: '',
              lastName: '',
              email: '',
              membership: '',
              expiredMembershipDate: ''
            }
          });
    
        } catch (error) {
          console.log(error);
        }
      },

      handleUpdateCustomerField: async (e) => {
        const { name, value } = e.target;
    
        
        set( state =>  ({
          updateCustomerForm: {
              ...state.updateCustomerForm,
              [name]: value
          }
      }))

      },
    
    
    
      deleteCustomer: async (id) => {
        try {
          //delete customer from db
          await axios.delete(`/customers/${id}`);
          
          //update state
          const { customers } = useCustomersStore.getState();
          const filteredCustomers = customers.filter(customer => customer._id !== id);
          set({customers: filteredCustomers});

        } catch (error) {
          console.log(error);
        }
      },
    
      toggleUpdateCustomerForm: (customer) => {
        set({
          updateCustomerForm: {
            _id: customer._id,
            firstName: customer.firstName,
            lastName: customer.lastName,
            email: customer.email,
            membership: customer.membership,
            expiredMembershipDate: customer.expiredMembershipDate
          }
        });
      },
    
      updateCustomer: async (e) => {
        e.preventDefault();
        try {
          const { updateCustomerForm, customers } = useCustomersStore.getState();
          const res = await axios.put(`/customers/${updateCustomerForm._id}`, updateCustomerForm);
          console.log(res.data);
          //update state
          const updatedCustomers = customers.map(customer => customer._id === updateCustomerForm._id ? res.data.updatedCustomer : customer);
          set({
            customers: updatedCustomers,
            updateCustomerForm: {
              _id: null,
              firstName: '',
              lastName: '',
              email: '',
              membership: '',
              expiredMembershipDate: ''
            }
          });
        } catch (error) {
          console.log(error);
        }
      }

}));

export default useCustomersStore;