import { useState } from "react";
import "./MultiSelector.css";

export const MultiSelector = () => {
  const interests = ["a", "b", "c"];
  const [selectedInterests, setSelectedInterests] = useState<{
    [key: string]: boolean;
  }>({});

  const toggleInterest = (interest: string) => {
    const isSelected = selectedInterests[interest];
    const newSelected = {
      ...selectedInterests,
    };
    newSelected[interest] = !isSelected;
    setSelectedInterests(newSelected);
  };

  return (
    <div className="multiselector">
      <p>Interests</p>
      {interests.map((interest) => (
        <button
          key={interest}
          className={`${selectedInterests[interest] ? "selected" : ""}`}
          onClick={() => {
            toggleInterest(interest);
          }}
        >
          {interest}
        </button>
      ))}
    </div>
  );
};
