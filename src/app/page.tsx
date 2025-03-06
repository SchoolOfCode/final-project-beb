"use client";
import { useEffect } from "react";
import styles from "./page.module.css";
import HomeHubContainer from "./components/HomeHubContainer/HomeHubContainer";
import SearchBar from "./components/SearchBar/SearchBar";
// import Navbar from "./components/NavBar/NarBar";
// This component serves as the main page for the root route (/).

export default function Home() {
  useEffect(() => {
    try {
      const script = document.createElement("script");
      script.async = true;
      script.type = "module";
      script.src = "https://interfaces.zapier.com/assets/web-components/zapier-interfaces/zapier-interfaces.esm.js";
      document.head.appendChild(script);

      const chatbotEmbed = document.createElement("zapier-interfaces-chatbot-embed");
      chatbotEmbed.setAttribute("is-popup", "true");
      chatbotEmbed.setAttribute("chatbot-id", "cm7tb1hrx000pw6c0hvbhcpm7");
      document.body.appendChild(chatbotEmbed);

      return () => {
        document.head.removeChild(script);
        document.body.removeChild(chatbotEmbed);
      };
    } catch (error) {
      console.error("Error adding chatbot script or embed:", error);
    }
  }, []);

  return (
    <main className={styles.pageContainer}>
      <div className={styles.navLogoContainer}>
        <div className={styles.searchBarContainer}>
          <SearchBar />
        </div>
        <div className={styles.logoContainer}>
          <p className={styles.headerLogo}>
            find your <span className={styles.flockText}>FLOCK</span>
          </p>
        </div>
      </div>
      <div className={styles.hubDiv}>
        <HomeHubContainer />
      </div>
    </main>
  );
}