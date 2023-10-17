import useBookingsStore from '../stores/bookingsStore';
import BookingRow from './BookingRow';

export default function BookingsTable() {
  const bookingsStore = useBookingsStore();

  return (
    <div>
        <table>
          <tr>
            <th>Yacht Name</th>
            <th>Name</th>
            <th>Email</th>
            <th>Check In</th>
            <th>Check Out</th>
            <th>action</th>
          </tr>
          {bookingsStore.bookings && bookingsStore.bookings.map(booking => (
            <BookingRow booking={booking} key={booking._id} />
          ))}
        </table>
    </div>
  )
}
