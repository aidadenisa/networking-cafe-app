import { useState } from "react";
import { MultiSelector } from "./MultiSelector";
import "./Profile.css";

export const Profile = () => {
  const [name, setName] = useState("");

  return (
    <div className="profile-page">
      <h2>Your Profile</h2>
      <label htmlFor="name">Name</label>
      <input
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <MultiSelector />
    </div>
  );
};
