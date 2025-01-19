import { ChangeEvent, useState } from "react";
import { InterestsSelector } from "./MultiSelector";
import "./Profile.css";
import { PrimaryBtn } from "../general/PrimaryBtn";
import { UserState } from "../../contexts/userContext";
import { useUserContext } from "../../contexts/useUserContext";

export const Profile = () => {
  const { state, setState } = useUserContext();
  const [name, setName] = useState(state.name);
  const [interests, setInterests] = useState<string[]>([]);

  const saveProfile = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    setState((prevState: UserState) => ({
      ...prevState,
      name,
      interests: interests,
    }));

    // TODO: think about navigating to the network page
  };

  return (
    <div className="profile-page">
      <h2>Your Profile</h2>
      <form onSubmit={saveProfile}>
        <div className="form-field">
          <label htmlFor="name">Name</label>
          <input
            name="name"
            defaultValue={state.name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-field">
          <InterestsSelector
            defaultInterests={state.interests}
            setInterests={setInterests}
          />
        </div>
        <PrimaryBtn>Save form</PrimaryBtn>
      </form>
    </div>
  );
};
