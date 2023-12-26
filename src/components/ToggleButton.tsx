import "../styles/togglebutton.css";

interface IToggleButtonProps {
  label: string;
  isChecked: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const ToggleButton = ({ label, isChecked, onChange }: IToggleButtonProps) => {
  return (
    <>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={onChange}
        id={label}
        className="toggle-checkbox"
      />
      <label htmlFor={label} className="toggle-button">
        {label}
      </label>
    </>
  );
};

export default ToggleButton;
