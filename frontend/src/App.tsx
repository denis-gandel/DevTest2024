import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { PollList } from "./components/PollList";
import { NewPoll } from "./components/dialogs/NewPoll";
import { Vote } from "./components/dialogs/Vote";
import { Poll } from "./models/poll";

function App() {
  const [newPollIsOpen, setNewPollIsOpen] = useState(false);
  const [poll] = useState<Poll>(
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
  );

  const handleNewPoll = () => {
    setNewPollIsOpen(!newPollIsOpen);
    console.log(newPollIsOpen);
  };

  return (
    <>
      <Header />
      <PollList handleNewPoll={handleNewPoll} />
      <NewPoll isOpen={newPollIsOpen} />
      <Vote title="Prueba" options={poll} />
    </>
  );
}

export default App;
