import "../../../styles/inputs/TextInput.css";

interface Props {
  id: number;
  label: string;
  value: string;
  changeValue: (id: number, event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const OptionInput = ({ id, label, value, changeValue }: Props) => {
  return (
    <div className="text-input-section">
      <label htmlFor="text-input-value" className="text-input-label">
        {label}
      </label>
      <input
        type="text"
        name="text-input-value"
        id="text-input-value"
        value={value}
        onChange={(e) => changeValue(id, e)}
      />
    </div>
  );
};
