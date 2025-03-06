"use client";
import HubContainer from "../components/HomeHubContainer/HomeHubContainer";
import { useEffect, useState } from "react";
import styles from "./Profile.module.css";
import Image from "next/image";
import BioCard from "./ProfileComponents/BioCard/BioCard";
import EditingCard from "./ProfileComponents/EditingCard/EditingCard";

interface User {
  name: string;
  email: string;
  bio: string;
  hubsJoined: string[];
}

export default function ProfilePage() {
  const [user, setUser] = useState<User>({
    name: "",
    email: "",
    bio: "",
    hubsJoined: [],
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState<User>(user);

  const [bannerColor, setBannerColor] = useState<string>("#275aff");


  useEffect(() => {
    const storedUser = localStorage.getItem("userProfile");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setEditedUser(JSON.parse(storedUser));
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setEditedUser({ ...editedUser, [e.target.name]: e.target.value });
  };
  const handleSave = () => {
    setUser(editedUser);
    localStorage.setItem("userProfile", JSON.stringify(editedUser));
    setIsEditing(false);
  };
  const handleCancel = () => {
    setEditedUser(user);
    setIsEditing(false);
  };

  return (
    <div className={styles.profileContainer}>
      <div
        className={styles.banner}
        style={{ backgroundColor: bannerColor }}
      ></div>
      <div className={styles.imageEditingContainer}>
        <div className={styles.imageContainer}>
          <Image
            className={styles.profileImage}
            src="/avatar.png"
            alt="placeholder image for the profile picture"
            width={200}
            height={200}
          />
        </div>
        <EditingCard
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          setBannerColor={setBannerColor}
        />
      </div>
      <div className={styles.bioHubsContainer}>
        <BioCard
          // user={user}
          editedUser={editedUser}
          isEditing={isEditing}
          handleChange={handleChange}
          handleSave={handleSave}
          handleCancel={handleCancel}
        />
        <div className={styles.favHubsContainer}>
          <h3>Joined Hubs:</h3>
          <HubContainer />
        </div>
      </div>
    </div>
  );
}
