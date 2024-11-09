import {Poll} from "../models/poll"

interface Props {
  poll: Poll
}

export const PollItem = ({poll}: Props) => {
  return (
    <div className="poll-item-section">
      <div className="poll-item-header">
        <p className="poll-item-name">{poll.name}</p>
      </div>
    </div>
  );
}