import { ChangeEvent, useState } from "react";
import { MultiSelector } from "./MultiSelector";
import "./Profile.css";

export const Profile = () => {
  const [name, setName] = useState("");

  const saveProfile = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO
  };

  return (
    <div className="profile-page">
      <h2>Your Profile</h2>
      <form onSubmit={saveProfile}>
        <label htmlFor="name">Name</label>
        <input
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <MultiSelector />
      </form>
    </div>
  );
};
