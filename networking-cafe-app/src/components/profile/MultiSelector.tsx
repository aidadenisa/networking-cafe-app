import "./MultiSelector.css";
import { getInterests } from "../../services/interestService";
import { useQuery } from "@tanstack/react-query";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

type InterestsSelectorProps = {
  defaultInterests: string[];
  setInterests: Dispatch<SetStateAction<string[]>>;
};
export const InterestsSelector = ({
  defaultInterests,
  setInterests,
}: InterestsSelectorProps) => {
  const [selectedInterests, setSelectedInterests] = useState<{
    [key: string]: boolean;
  }>({});

  useEffect(() => {
    const initial: { [key: string]: boolean } = {};
    if (defaultInterests && defaultInterests.length) {
      for (let i = 0; i < defaultInterests.length; i++) {
        initial[defaultInterests[i]] = true;
      }
    }
    setSelectedInterests(initial);
  }, []);

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
