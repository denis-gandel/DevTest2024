import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { PollList } from './components/PollList'
import { NewPoll } from './components/dialogs/NewPoll';
import { NewPollContext } from './contexts/NewPollContext';

function App() {

  const [newPollIsOpen, setNewPollIsOpen] = useState(false);
  const [newPoll, setNewPoll] = useState({})

  const handleNewPoll = () => {
    setNewPollIsOpen(!newPollIsOpen);
    console.log(newPollIsOpen)
  }

  return (
    <>
      <Header />
      <PollList handleNewPoll={handleNewPoll} />
      <NewPollContext.Provider value={newPoll}>
        <NewPoll isOpen={newPollIsOpen} />
      </NewPollContext.Provider>
    </>
  );
}

export default App
