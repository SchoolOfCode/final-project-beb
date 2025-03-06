"use client";
import AllHubContainer from "../components/AllHubsContainer/AllHubsContainer";
import styles from "./AllHubs.module.css";
import AllHubsSearchBar from "./AllHubsSearchBar/AllHubsSearchBar";

const AllHubsPage: React.FC = () => {
  return (
    <main className={styles.allHubsDiv}>
      <div className={styles.bannerDiv}>
        <div className={styles.titleContainer}>
          <h1 className={styles.hubsTitle}>hubs</h1>
        </div>
        <div className={styles.searchContainer}>
          <AllHubsSearchBar />
        </div>
        <div className={styles.logoContainer}>
          <p className={styles.flockLogo}>FLOCK</p>
        </div>
      </div>
      <div className={styles.cardDiv}>
        <AllHubContainer />
      </div>
    </main>
  );
};

export default AllHubsPage;
