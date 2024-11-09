import '../../../styles/inputs/TextInput.css'

interface Props {
  label: string;
  value: string;
  changeValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TextInput = ({label, value, changeValue}: Props) => {
  return (
    <div className="text-input-section">
      <label htmlFor="text-input-value" className="text-input-label">
        {label}
      </label>
      <input type="text" name="text-input-value" id="text-input-value" value={value} onChange={changeValue} />
    </div>
  );
}