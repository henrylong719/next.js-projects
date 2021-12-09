import React from 'react';
import EventList from '../components/events/eventList';
import EventSearch from '../components/events/EventSearch';
import { getFeaturedEvents } from '../dummy-data';
import { useRouter } from 'next/router';

const HomePage = () => {
  const featuredEvents = getFeaturedEvents();

  const router = useRouter();

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }

  return (
    <>
      <EventSearch onSearch={findEventsHandler} />
      <EventList items={featuredEvents} />
    </>
  );
};

export default HomePage;
