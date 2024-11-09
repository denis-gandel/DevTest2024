import { useEffect, useState } from "react";
import { Poll } from "../models/poll";
import { PollOption } from "./PollOption";
import '../styles/PollView.css'

interface Props {
  poll: Poll;
}

export const PollView = ({ poll }: Props) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const totalVotes = poll.options.reduce(
      (accumulator, current) => accumulator + current.votes,
      0
    );
    setTotal(totalVotes);
  }, [poll.options]);

  return (
    <div className="poll-view-section">
      <div className="poll-view-header">
        <h3 className="poll-view-name">{poll.name}</h3>
        <button className="poll-view-vote">Vote</button>
      </div>
      {poll.options.length > 0 ? (
        poll.options.map((option) => {
          return <PollOption key={option.id} option={option} percentage={10} />;
        })
      ) : (
        <></>
      )}
      <p className="poll-view-total">Total Votes: {total}</p>
    </div>
  );
};
