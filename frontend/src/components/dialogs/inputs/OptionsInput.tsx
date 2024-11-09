import { OptionInput } from "./OptionInput";
import { Option } from "../../../models/option";

interface Props {
  options: Array<Option>,
  handleAddOption: () => void,
  changeNameOption: (id: number, event: React.ChangeEvent<HTMLInputElement>) => void
}

export const OptionsInput = ({options, handleAddOption, changeNameOption}: Props) => {
  return (
    <div className="options-input-section">
      <p className="option-input-title">Options:</p>
      {options && options.length > 0 ? (
        options.map(option => {
          return (
            <OptionInput
              key={option.id}
              id={option.id}
              label={`${option.id}`}
              value={option.name}
              changeValue={changeNameOption}
            />
          );
        })
      ) : (
        <></>
      )}
      <button className="option-input-add-option" onClick={handleAddOption}>Add option</button>
    </div>
  );
};
