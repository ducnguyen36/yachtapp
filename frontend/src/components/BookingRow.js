
import useBookingsStore from '../stores/bookingsStore';

export default function BookingRow({ booking }) {
  const bookingsStore = useBookingsStore(store => {
    return {
      deleteBooking: store.deleteBooking,
      toggleUpdateBookingForm: store.toggleUpdateBookingForm
    }
  });
  return (
    <tr key={booking._id}>
      <td>{booking.yachtName}</td>
      <td>{booking.customerName}</td>
      <td>{booking.customerEmail}</td>
      <td>{booking.startDate}</td>
      <td>{booking.endDate}</td>
      <td>
        <button onClick={() => bookingsStore.deleteBooking(booking._id)}>Delete</button>
        <button onClick={() => bookingsStore.toggleUpdateBookingForm(booking)}>Update</button>
      </td> 
    </tr>
  )
}
