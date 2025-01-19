import "./MultiSelector.css";
import { getInterests } from "../../services/interestService";
import { useQuery } from "@tanstack/react-query";
import { Dispatch, SetStateAction, useState } from "react";

type InterestsSelectorProps = {
  setInterests: Dispatch<SetStateAction<string[]>>;
};
export const InterestsSelector = ({ setInterests }: InterestsSelectorProps) => {
  const [selectedInterests, setSelectedInterests] = useState<{
    [key: string]: boolean;
  }>({});

  const {
    data: interests,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["interests"],
    queryFn: getInterests,
  });

  const toggleInterest = (interest: string) => {
    const isSelected = selectedInterests[interest];
    const newSelected = {
      ...selectedInterests,
    };
    newSelected[interest] = !isSelected;
    setSelectedInterests(newSelected);

    const interestList: string[] = [];
    for (const interest in selectedInterests) {
      if (selectedInterests[interest]) {
        interestList.push(interest);
      }
    }
    setInterests(interestList);
  };

  if (isLoading) return <p>Loading....</p>;
  if (error) return <p>There was an error! Please try again later</p>;

  return (
    <div className="multiselector">
      <p>Interests</p>
      {interests &&
        interests.map((interest) => (
          <button
            key={interest}
            className={`${selectedInterests[interest] ? "selected" : ""}`}
            onClick={(e) => {
              e.preventDefault();
              toggleInterest(interest);
            }}
          >
            {interest}
          </button>
        ))}
    </div>
  );
};
