import { Option } from '../models/option';
import '../styles/PollOption.css'

interface Props {
  option: Option,
  percentage: number
}

export const PollOption = ({option, percentage}: Readonly<Props>) => {
  return (
    <div className="poll-option-section">
      <p className="poll-option-name">{option.name}</p>
      <span className="poll-option-percentage">{percentage} %</span>
    </div>
  );
}