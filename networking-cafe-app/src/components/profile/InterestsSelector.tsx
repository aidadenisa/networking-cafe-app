import './InterestsSelector.css';
import { getInterests } from '../../services/interestService';
import { useQuery } from '@tanstack/react-query';
import { ChangeEvent, useEffect, useState } from 'react';
import { useDebounce } from '../../hooks/useDebounce';

type InterestsSelectorProps = {
  defaultInterests?: string[];
  setInterests: (value: string[]) => void;
};
export const InterestsSelector = ({
  defaultInterests,
  setInterests,
}: InterestsSelectorProps) => {
  const [selectedInterests, setSelectedInterests] = useState<{
    [key: string]: boolean;
  }>({});
  const [filteredInterests, setFilteredInterests] = useState<string[]>([]);
  const debounce = useDebounce(1000);

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
    queryKey: ['interests'],
    queryFn: getInterests,
  });

  useEffect(() => {
    setFilteredInterests(interests || []);
  }, [interests]);

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

  const filterInterests = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (!e.target || !e.target.value) return;
    const filter = e.target.value || '';

    debounce(() => {
      console.log('making the req.');
      setFilteredInterests(
        interests?.filter((i) =>
          i.toLowerCase().includes(filter.toLowerCase())
        ) || []
      );
    });
  };

  if (isLoading) return <p>Loading....</p>;
  if (error) return <p>There was an error! Please try again later</p>;

  return (
    <div className="multiselector">
      <p>Interests</p>
      <input type="text" onChange={filterInterests} />
      {filteredInterests &&
        filteredInterests.map((interest) => (
          <button
            key={interest}
            className={`${selectedInterests[interest] ? 'selected' : ''}`}
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
