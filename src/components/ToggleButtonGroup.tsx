import ToggleButton from "./ToggleButton";
import "../styles/togglebuttongroup.css";

interface IToggleButtonGroupProps {
  buttonsData: { label: string; checked: boolean; key: string }[];
  onToggle: (key: string) => void;
}

const ToggleButtonGroup = ({
  buttonsData,
  onToggle,
}: IToggleButtonGroupProps) => {
  return (
    <div className="toggle-button-group">
      {buttonsData.map(({ label, checked, key }) => (
        <ToggleButton
          key={key}
          label={label}
          isChecked={checked}
          onChange={() => onToggle(key)}
        />
      ))}
    </div>
  );
};

export default ToggleButtonGroup;
