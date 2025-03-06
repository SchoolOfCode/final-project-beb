"use client";
import React from "react";
import styles from "./PhotographyEventsCarousel.module.css";

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
    title: "Landscape Photography Workshop",
    date: "March 15, 2025",
    description:
      "Learn the art of capturing breathtaking landscapes with expert guidance.",
    image: "/images/landscape_workshop.jpg",
  },
  {
    id: 2,
    title: "Street Photography Walk",
    date: "April 2, 2025",
    description:
      "Join fellow photographers in exploring urban scenes and moments.",
    image: "/images/street_photography.jpg",
  },
  {
    id: 3,
    title: "Wildlife Photography Expedition",
    date: "May 20, 2025",
    description:
      "A thrilling experience capturing stunning wildlife in their natural habitat.",
    image: "/images/wildlife_expedition.jpg",
  },
  {
    id: 4,
    title: "Portrait Photography Masterclass",
    date: "June 5, 2025",
    description:
      "Enhance your skills in portrait photography with lighting and posing techniques.",
    image: "/images/portrait_masterclass.jpg",
  },
];

export default function EventCarousel() {
  return (
    <div className={styles.eventsContainer}>
      <h2>Upcoming Photography Events</h2>
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
