import useBookingsStore from "../stores/bookingsStore";

export default function UpdateBooking() {
  const bookingsStore = useBookingsStore();

  return (
    <div>
        <h2>Update Booking</h2>
        <form onSubmit={bookingsStore.updateBooking}>
          <input
              onChange={bookingsStore.handleUpdateBookingField}
              name='yachtName'
              value={bookingsStore.updateBookingForm.yachtName}
          />
          <input
            onChange={bookingsStore.handleUpdateBookingField}
            name='customerEmail'
            value={bookingsStore.updateBookingForm.customerEmail}
          />
          
          <input
            
            onChange={bookingsStore.handleUpdateBookingField}
            name='startDate'
            value={bookingsStore.updateBookingForm.startDate}
              
          />
          <input
            
            onChange={bookingsStore.handleUpdateBookingField}
            name='endDate'
            value={bookingsStore.updateBookingForm.endDate}
          />
          <button>Update</button>
        </form>
      </div>
  )
}
