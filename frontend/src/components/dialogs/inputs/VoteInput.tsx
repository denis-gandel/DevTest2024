interface Props {
  label: string;
  optionLabel: string
}

export const VoteInput = ({label, optionLabel}: Props) => {
  return (
    <div className="vote-input-section">
      <label htmlFor="vote-input-check" className="vote-input-index">
        {label}
        <input type="checkbox" name="vote-input-check" id="vote-input-check" />
        {optionLabel}
      </label>
    </div>
  );
}