import { useState } from "react";
import { Option } from "../../models/option";
import { TextInput } from "./inputs/TextInput";

interface Props {
  title: string,
  options: Array<Option>
}

export const Vote = ({title, options}: Props) => {

  const [email, setEmail] = useState('')

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  return (
    <div className="vote-section">
      <p className="vote-title"><b>Vote: </b>{title}</p>
      <TextInput label="Email:" value={email} changeValue={handleEmail} />
    </div>
  );
}