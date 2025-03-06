"use client";
import HubCard from "../HubCard/HubCard";
import styles from "./AllHubsContainer.module.css";

//This is the Hub Container, only for the All Hubs Page

//This file defines a React component called HubContainer.
// Its role is to serve as a container for HubCard components.
// includes the HubCard component with an href prop set to /SingleHub.
const AllHubContainer = () => {
  return (
    <div className={styles.buttonDiv}>
      <HubCard label="Stamps" href="/SingleHub" className={styles.hubButton} />
      <HubCard
        label="Photography"
        href="/Photography"
        className={styles.hubButton}
      />
      <HubCard
        label="Painting"
        href="/SingleHub"
        className={styles.hubButton}
      />
      <HubCard label="Cooking" href="/SingleHub" className={styles.hubButton} />
      <HubCard
        label="Gardening"
        href="/SingleHub"
        className={styles.hubButton}
      />
      <HubCard label="Reading" href="/SingleHub" className={styles.hubButton} />
      <HubCard
        label="Book Club"
        href="/Bookclub"
        className={styles.hubButton}
      />
      <HubCard label="Music" href="/SingleHub" className={styles.hubButton} />
      <HubCard label="Hiking" href="/SingleHub" className={styles.hubButton} />
      <HubCard label="Cycling" href="/SingleHub" className={styles.hubButton} />
      <HubCard label="Coding" href="/SingleHub" className={styles.hubButton} />
      <HubCard label="Techno" href="/Techno" className={styles.hubButton} />
      <HubCard
        label="Traveling"
        href="/SingleHub"
        className={styles.hubButton}
      />
      <HubCard label="Martial Arts" href="/Martialarts" className={styles.hubButton} />
      <HubCard label="Gaming" href="/SingleHub" className={styles.hubButton} />
      <HubCard
        label="Birdwatching"
        href="/SingleHub"
        className={styles.hubButton}
      />
      <HubCard label="Art" href="/Arts" className={styles.hubButton} />
    </div>
  );
};

export default AllHubContainer;
