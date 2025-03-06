"use client";
import React from "react";
import styles from "./ArtsEventsCarousel.module.css"

type Event = {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
};

const events: Event[] = [
  {
    id: 1,
    title: "Abstract Painting Workshop",
    date: "March 15, 2025",
    description:
      "Explore the world of abstract art and unleash your creativity with expert guidance.",
    image: "/images/abstract_painting.jpg",
  },
  {
    id: 2,
    title: "Street Art Tour",
    date: "April 2, 2025",
    description: "Discover the most stunning street art and murals in the city on this guided tour.",
    image: "/images/street_art_tour.jpg",
  },
  {
    id: 3,
    title: "Sculpture Exhibition",
    date: "May 20, 2025",
    description:
      "Experience a showcase of breathtaking sculptures from renowned and emerging artists.",
    image: "/images/sculpture_exhibition.jpg",
  },
  {
    id: 4,
    title: "Portrait Drawing Masterclass",
    date: "June 5, 2025",
    description:
      "Learn the art of portrait drawing with expert techniques on shading and proportions.",
    image: "/images/portrait_drawing.jpg",
  },
];

export default function EventCarousel() {
  return (
    <div className={styles.eventsContainer}>
      <h2>Upcoming Art Events</h2>
      <div className={styles.eventsList}>
        {events.map((event: Event) => (
          <div key={event.id} className={styles.eventCard}>
            <h3>{event.title}</h3>
            <p>
              <strong>Date:</strong> {event.date}
            </p>
            <p>{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
