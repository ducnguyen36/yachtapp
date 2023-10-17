import { useEffect } from 'react';
import BookingsTable from '../components/BookingsTable';
import UpdateBooking from '../components/UpdateBooking';
import AddBooking from '../components/AddBooking';
import useBookingsStore from '../stores/bookingsStore';

export default function BookingsPage() {
  //store
  const bookingsStore = useBookingsStore();

  //useState

  //useEffect
  useEffect(() => {
    bookingsStore.fetchBookings();
  }, []);
  
  //functions

  return (
    <div className="App">
      {/* booking list */}
      <BookingsTable />
      {/* booking form */}
      {bookingsStore.updateBookingForm._id? <UpdateBooking /> : <AddBooking />}
      
    </div>
  );
}
