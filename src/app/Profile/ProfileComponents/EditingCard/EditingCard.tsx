import styles from "./EditingCard.module.css";
import { useState } from "react";

interface EditingCardProps {
  isEditing: boolean;
  setIsEditing: (editing: boolean) => void;
  setBannerColor: React.Dispatch<React.SetStateAction<string>>;
}

export default function EditingCard({
  isEditing,
  setIsEditing,
  setBannerColor,
}: EditingCardProps) {
  const [isBannerOpen, setIsBannerOpen] = useState(false); // State for toggling banner visibility

  return (
    <div className={styles.editingContainer}>
      <button
        className={styles.editingButton}
        onClick={() => setIsEditing(!isEditing)}
      >
        Edit Profile
      </button>

      <button
        className={styles.editingButton} // Same class as the edit profile button
        onClick={() => setIsBannerOpen(!isBannerOpen)}
        style={{ marginTop: "10px" }}
      >
        Edit Banner
      </button>

      {isBannerOpen && ( // Show this div only if the banner is open
        <div className={styles.colourButtonDiv}>
          <div className={styles.buttonCenterPanel}>
            <button
              style={{ backgroundColor: "#ff3f3f" }}
              className={styles.colorButton}
              onClick={() => setBannerColor("#ff3f3f")}
            />
            <button
              style={{ backgroundColor: "#feabab" }}
              className={styles.colorButton}
              onClick={() => setBannerColor("#feabab")}
            />
            <button
              style={{ backgroundColor: "#ff8534" }}
              className={styles.colorButton}
              onClick={() => setBannerColor("#ff8534")}
            />
            <button
              style={{ backgroundColor: "#ffd955" }}
              className={styles.colorButton}
              onClick={() => setBannerColor("#ffd955")}
            />
            <button
              style={{ backgroundColor: "#275aff" }}
              className={styles.colorButton}
              onClick={() => setBannerColor("#275aff")}
            />
            <button
              style={{ backgroundColor: "#4b6e49" }}
              className={styles.colorButton}
              onClick={() => setBannerColor("#4b6e49")}
            />
            <button
              style={{ backgroundColor: "#f8f5f3" }}
              className={styles.colorButton}
              onClick={() => setBannerColor("#f8f5f3")}
            />
            <button
              style={{ backgroundColor: "#dfdfdf" }}
              className={styles.colorButton}
              onClick={() => setBannerColor("#dfdfdf")}
            />
            <button
              style={{ backgroundColor: "#000000" }}
              className={styles.colorButton}
              onClick={() => setBannerColor("#000000")}
            />
          </div>
        </div>
      )}
    </div>
  );
}
