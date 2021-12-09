import React from 'react';
import EventItem from './EventItem';
import classes from './eventList.module.css';

const EventList = (props) => {
  const { items } = props;
  return (
    // title, image, date, location, id
    <ul className={classes.list}>
      {items.map((event) => (
        <EventItem
          key={event.id}
          id={event.id}
          title={event.title}
          location={event.location}
          date={event.date}
          image={event.image}
        />
      ))}
    </ul>
  );
};

export default EventList;
