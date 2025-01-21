import { ChangeEvent, useRef, useState } from 'react';
import { InterestsSelector } from './InterestsSelector';
import './Profile.css';
import { PrimaryBtn } from '../general/PrimaryBtn';
import { UserState } from '../../contexts/userContext';
import { useUserContext } from '../../contexts/useUserContext';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const { state, setState } = useUserContext();
  const [name, setName] = useState(state.name);
  const [interests, setInterests] = useState<string[]>([]);

  const randomNum = useRef<HTMLDivElement | null>(null);

  const navigate = useNavigate();

  const saveProfile = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (randomNum.current) {
      randomNum.current.innerHTML = Math.random().toString();
    }

    setState((prevState: UserState) => ({
      ...prevState,
      name,
      interests: interests,
    }));

    navigate('/');
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
        <div className="randomNum" ref={randomNum}></div>
        <PrimaryBtn>Save form</PrimaryBtn>
      </form>
    </div>
  );
};
export default Profile;
