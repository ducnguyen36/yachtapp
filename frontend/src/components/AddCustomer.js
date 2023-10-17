import useCustomersStore from "../stores/customersStore";

export default function AddCustomer() {
  const customersStore = useCustomersStore();

  return (
    <div>
        <h2>Add Customer</h2>
        <form onSubmit={customersStore.addCustomer}>
            <input
              onChange={customersStore.handleCreateCustomerField}
              name='firstname'
              value={customersStore.createCustomer.firstName}
              placeholder="Firstname"
            />
            <input
              onChange={customersStore.handleCreateCustomerField}
              name='lastname'
              value={customersStore.createCustomer.lastName}
              placeholder="Lastname"
            />
            <input
              onChange={customersStore.handleCreateCustomerField}
              type="email"
              name='email'
              value={customersStore.createCustomer.email}
              placeholder="Your Email"
            />
            <select
              onChange={customersStore.handleCreateCustomerField}
              name="membership"
              value={customersStore.createCustomer.membership}
            >
              <option value="Silver">Silver</option>
              <option value="Gold">Gold</option>
              <option value="Platinum">Platinum</option>
              <option value="Diamond">Diamond</option>
            </select>
            
            <input
              onChange={customersStore.handleCreateCustomerField}
              type="date"
              name='lastMaintenanceDate'
              value={customersStore.createCustomer.expiredMembershipDat}
              placeholder="membership expiration date"
            />
            
            <button>Submit</button>
        </form>
    </div>
  )
}
