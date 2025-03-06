"use client";
import React from "react";
import styles from "./EventCarousel.module.css";

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
    title: "National Stamp Collectors Meetup",
    date: "March 15, 2025",
    description:
      "Join fellow collectors for a showcase of rare and unique stamps.",
    image: "/images/stamp_meetup.jpg",
  },
  {
    id: 2,
    title: "Vintage Stamp Auction",
    date: "April 2, 2025",
    description: "Bid on classic and rare stamps from around the world.",
    image: "/images/stamp_auction.jpg",
  },
  {
    id: 3,
    title: "International Philately Expo",
    date: "May 20, 2025",
    description: "Experience a global exhibition of stamps and postal history.",
    image: "/images/stamp_expo.jpg",
  },
  {
    id: 4,
    title: "Rare Stamps Showcase",
    date: "June 5, 2025",
    description:
      "View some of the rarest and most valuable stamps in existence.",
    image: "/images/rare_stamps.jpg",
  },
  {
    id: 5,
    title: "Rare Stamps Auction",
    date: "June 10, 2025",
    description:
      "View some of the rarest and most valuable stamps in existence.",
    image: "/images/rare_stamps.jpg",
  },
];

export default function EventCarousel() {
  return (
    <div className={styles.eventsContainer}>
      <h2>Upcoming Events</h2>
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
