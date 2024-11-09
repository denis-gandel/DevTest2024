import {  useState } from "react";
import { TextInput } from "./inputs/TextInput";
import '../../styles/NewPoll.css'
import { Option } from "../../models/option";
import { OptionsInput } from "./inputs/OptionsInput";

interface Props {
  isOpen: boolean
}

export const NewPoll = ({isOpen}: Props) => {

  const [nameValue, setNameValue] = useState("");

  const [options, setOptions] = useState<Array<Option>>([
    {
      id: 1,
      name: "",
      votes: 0,
    },
    {
      id: 2,
      name: "",
      votes: 0,
    },
  ]);

  const handleAddOption = () => {
    setOptions([
      ...options,
      {
        id: options.length,
        name: "",
        votes: 0,
      },
    ]);
  };

  const changeNameOption = (id: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const values = [...options]
    values[id] = {...values[id], name: event.target.value}
  }
  

  const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNameValue(event.target.value)
  }

  return (
    <div className={`new-poll-dialog ${isOpen ? 'show' : ''}`}>
      <p className="new-poll-dialog-title">New Poll</p>
      <TextInput label="Name" value={nameValue} changeValue={handleName} />
      <OptionsInput options={options} handleAddOption={handleAddOption} changeNameOption={changeNameOption} />
    </div>
  );
}