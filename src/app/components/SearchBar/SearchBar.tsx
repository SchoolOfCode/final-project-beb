"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; // Correct for Next.js 13+
import styles from "./SearchBar.module.css";
//these is the search bar
//need to add css

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (searchTerm.trim()) {
      router.push(`/Hubs?query=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    // <div className={styles.searchBarContainer}>
    <input
      id="searchBar"
      className={styles.inputBox}
      type="text"
      placeholder="Search Hubs..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      onKeyDown={(e) => e.key === "Enter" && handleSearch()} // Press Enter to search
    />
    // </div>
  );
}
