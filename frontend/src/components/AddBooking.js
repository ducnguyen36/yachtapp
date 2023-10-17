import useBookingsStore from "../stores/bookingsStore";

export default function AddBooking() {
  const bookingsStore = useBookingsStore();

  return (
    <div>
        <h2>Add Booking</h2>
        <form onSubmit={bookingsStore.addBooking}>
            <input
              onChange={bookingsStore.handleCreateBookingField}
              name='yachtName'
              value={bookingsStore.createBooking.yachtName}
              placeholder="Yacht Name"
            />
            <input
              onChange={bookingsStore.handleCreateBookingField}
              name='customerEmail'
              value={bookingsStore.createBooking.customerEmail}
              placeholder="Email of Customer"
            />
            <input
              type="date"
              onChange={bookingsStore.handleCreateBookingField}
              name='startDate'
              value={bookingsStore.createBooking.startDate}
              placeholder="Check In Date"
            />
            <input
              type="date"
              onChange={bookingsStore.handleCreateBookingField}
              name='endDate'
              value={bookingsStore.createBooking.endDate}
              placeholder="Check Out Date"
            />
            <button>Create</button>
        </form>
    </div>
  )
}
