import React, { useEffect } from 'react'
import { render } from "react-dom";
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from "moment";
import 'react-big-calendar/lib/css/react-big-calendar.css';

import useBookingsStore from '../stores/bookingsStore';


export default function BookingsCalendarPage() {
  const bookingsStore = useBookingsStore();
  const localizer = momentLocalizer(moment);
  //useEffect
  useEffect(() => {
    bookingsStore.fetchBookings();
  }, []);
  // const now = new Date()
  // const events = [
  //   {  
  //       title: 'Late Same Night Event',
  //       start: new Date(2015, 3, 17, 19, 30, 0),
  //       end: new Date(2015, 3, 17, 23, 30, 0),
  //   },
  //   {
  //       title: 'Multi-day Event',
  //       start: new Date(2015, 3, 20, 19, 30, 0),
  //       end: new Date(2015, 3, 22, 2, 0, 0),
  //   },
  //   {
  //       title: 'Today',
  //       start: new Date(new Date().setHours(new Date().getHours() - 3)),
  //       end: new Date(new Date().setHours(new Date().getHours() + 3)),
  //   },
  //   {
  //       title: 'Point in Time Event',
  //       start: now,
  //       end: now,
  //   },
  // ]

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={bookingsStore.events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  )
}
