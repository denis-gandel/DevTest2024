import '../styles/PollHeader.css'

interface Props {
  newPollOpen: () => void
}

export const PollHeader = ({newPollOpen}: Props) => {
  return (
    <div className="poll-header-seciton">
    <h2>Poll List</h2>
    <button onClick={newPollOpen}>Add New</button>
    </div>
  );
}