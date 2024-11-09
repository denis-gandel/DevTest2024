import "../styles/PollList.css";
import { useState } from "react";
import { PollHeader } from "./PollHeader";
import {Poll} from "../models/poll";
import { PollView } from "./PollView";

interface Props {
  handleNewPoll: () => void
}

export const PollList = ({handleNewPoll}: Props) => {
  const [polls] = useState<Array<Poll>>([
    {
      id: 1,
      name: "Poll test",
      options: [
        {
          id: 1,
          name: "Poll test option",
          votes: 100,
        },
        {
          id: 2,
          name: "Poll test option",
          votes: 100,
        },
        {
          id: 3,
          name: "Poll test option",
          votes: 100,
        },
      ],
    },
  ]);

  return (
    <div className="poll-list-section">
      <PollHeader newPollOpen={handleNewPoll} />
      {polls && polls.length > 0 ? (
        polls.map((poll) => (
          <PollView key={poll.id} poll={poll} />
        ))
      ) : (
        <p>No polls</p>
      )}
    </div>
  );
};
