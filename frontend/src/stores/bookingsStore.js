import { create } from 'zustand';
import axios from 'axios';

//create booking store
const useBookingsStore = create((set) => ({
    bookings: [],

    events: [],

    createBooking: {
      yachtName: '',
      customerName: '',
      customerEmail: '',
      startDate: '',
      endDate: ''
    },

    updateBookingForm: {
      _id: null,
      yachtName: '',
      customerName: '',
      customerEmail: '',
      startDate: '',
      endDate: ''
    },

    fetchBookings: async () => {
        try {
            const res = await axios.get('/bookings');
            set({
              bookings: res.data,
              events: res.data.map(booking => {
                return {
                  title: booking.yachtName + ' - ' + booking.customerName,
                  start: new Date(booking.startDate),
                  end: new Date(booking.endDate)
                }
              })
            });
            console.log(res.data);
          } catch (error) {
            console.log(error);
          }
    },

    handleCreateBookingField: async (e) => {
        const { name, value } = e.target;
    
       
        set( state =>  ({
            createBooking: {
                ...state.createBooking,
                [name]: value
            }
        }))
    },

    addBooking: async (e) => {
        e.preventDefault();
        try {
          const { createBooking, bookings } = useBookingsStore.getState();
          const res = await axios.post('/bookings', createBooking);
          console.log(res.data);
          //update state and clear form
          set({
            bookings: [...bookings, res.data.newBooking],
            createBooking: {
              yachtName: '',
              customerEmail: '',
              startDate: '',
              endDate: ''
            }
          });
    
        } catch (error) {
          console.log(error);
        }
      },

      handleUpdateBookingField: async (e) => {
        const { name, value } = e.target;
    
        
        set( state =>  ({
          updateBookingForm: {
              ...state.updateBookingForm,
              [name]: value
          }
      }))

      },
    
    
    
      deleteBooking: async (id) => {
        try {
          //delete booking from db
          await axios.delete(`/bookings/${id}`);
          
          //update state
          const { bookings } = useBookingsStore.getState();
          const filteredBookings = bookings.filter(booking => booking._id !== id);
          set({bookings: filteredBookings});

        } catch (error) {
          console.log(error);
        }
      },
    
      toggleUpdateBookingForm: (booking) => {
        set({
          updateBookingForm: {
            _id: booking._id,
            yachtName: booking.yachtName,
            customerEmail: booking.customerEmail,
            startDate: booking.startDate,
            endDate: booking.endDate
          }
        });
      },
    
      updateBooking: async (e) => {
        e.preventDefault();
        try {
          const { updateBookingForm, bookings } = useBookingsStore.getState();
          const res = await axios.put(`/bookings/${updateBookingForm._id}`, updateBookingForm);
          console.log(res.data);
          //update state
          const updatedBookings = bookings.map(booking => booking._id === updateBookingForm._id ? res.data.updatedBooking : booking);
          set({
            bookings: updatedBookings,
            updateBookingForm: {
              _id: null,
              yachtName: '',
              customerName: '',
              customerEmail: '',
              startDate: '',
              endDate: ''
            }
          });
        } catch (error) {
          console.log(error);
        }
      }

}));

export default useBookingsStore;