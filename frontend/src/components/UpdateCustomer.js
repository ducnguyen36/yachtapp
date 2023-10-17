import useCustomersStore from "../stores/customersStore";

export default function UpdateCustomer() {
  const customersStore = useCustomersStore();

  return (
    <div>
        <h2>Update Customer</h2>
        <form onSubmit={customersStore.updateCustomer}>
          <input
            onChange={customersStore.handleUpdateCustomerField}
            name='firstname'
            value={customersStore.updateCustomerForm.firstName}
            placeholder="Firstname"
          />
          <input
            onChange={customersStore.handleUpdateCustomerField}
            name='lastname'
            value={customersStore.updateCustomerForm.lastName}
            placeholder="Lastname"
          />
          <input
            onChange={customersStore.handleUpdateCustomerField}
            type="email"
            name='email'
            value={customersStore.updateCustomerForm.email}
            placeholder="Your Email"
          />
          <select
            onChange={customersStore.handleUpdateCustomerField}
            name="membership"
            value={customersStore.updateCustomerForm.membership}
          >
            <option value="Silver">Silver</option>
            <option value="Gold">Gold</option>
            <option value="Platinum">Platinum</option>
            <option value="Diamond">Diamond</option>
          </select>
          
          <input
            onChange={customersStore.handleUpdateCustomerField}
            type="date"
            name='lastMaintenanceDate'
            value={customersStore.updateCustomerForm.expiredMembershipDat}
            placeholder="membership expiration date"
          />              
          <button>Update</button>
        </form>
      </div>
  )
}
