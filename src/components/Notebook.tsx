import "../styles/notebook.css";
import optionsInfoIcon from "../assets/options-info.svg";
import ToggleButtonGroup from "./ToggleButtonGroup";
import { FormEvent, useState } from "react";

const NoteBook = () => {
  const [muscleGroups, setMuscleGroups] = useState({
    upper: false,
    lowerLegs: false,
    push: false,
    pull: false,
  });

  const [bodyParts, setBodyParts] = useState({
    chest: false,
    upperBack: false,
    lowerBack: false,
    biceps: false,
    triceps: false,
    forearms: false,
    abs: false,
    obliques: false,
    quads: false,
    hamstrings: false,
    calves: false,
    glutes: false,
  });

  const [duration, setDuration] = useState({
    lessThanOneHr: false,
    oneToTwoHrs: false,
    greaterThanTwoHrs: false,
  });

  const [workoutType, setWorkoutType] = useState({
    weightLifting: false,
    bodyweight: false,
  });

  const handleMuscleGroupsToggle = (key: string) => {
    setMuscleGroups((prev) => ({
      ...prev,
      [key]: !prev[key as keyof typeof prev],
    }));
  };

  const handleBodyPartsToggle = (key: string) => {
    setBodyParts((prev) => ({
      ...prev,
      [key]: !prev[key as keyof typeof prev],
    }));
  };

  const handleDurationToggle = (key: string) => {
    setDuration((prev) => ({
      ...prev,
      [key]: !prev[key as keyof typeof prev],
    }));
  };

  const handleWorkoutTypeToggle = (key: string) => {
    setWorkoutType((prev) => ({
      ...prev,
      [key]: !prev[key as keyof typeof prev],
    }));
  };

  const notebookLines = Array.from({ length: 19 }, (_, index) => (
    <div key={index} className="notebook-line"></div>
  ));

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    const filteredMuscleGroups = Object.fromEntries(
      Object.entries(muscleGroups).filter(([, value]) => value)
    );

    const filteredBodyParts = Object.fromEntries(
      Object.entries(bodyParts).filter(([, value]) => value)
    );

    const filteredDuration = Object.fromEntries(
      Object.entries(duration).filter(([, value]) => value)
    );

    const filteredWorkoutType = Object.fromEntries(
      Object.entries(workoutType).filter(([, value]) => value)
    );

    console.log(
      `Muscle groups: ${JSON.stringify(
        filteredMuscleGroups
      )}\nBody parts: ${JSON.stringify(
        filteredBodyParts
      )}\nDuration: ${JSON.stringify(
        filteredDuration
      )}\nWorkout type: ${JSON.stringify(filteredWorkoutType)}\n`
    );
    e.preventDefault();
  };

  return (
    <div className="notebook">
      <div className="options">
        <div className="options-header">
          <h2>Options</h2>
          <img
            src={optionsInfoIcon}
            alt="Options information icon"
            width={20}
            height={20}
          />
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-toggle-section">
            <h3>Muscle groups</h3>
            <ToggleButtonGroup
              buttonsData={[
                { label: "UPPER", checked: muscleGroups.upper, key: "upper" },
                {
                  label: "LOWER/LEGS",
                  checked: muscleGroups.lowerLegs,
                  key: "lowerLegs",
                },
                { label: "PUSH", checked: muscleGroups.push, key: "push" },
                { label: "PULL", checked: muscleGroups.pull, key: "pull" },
              ]}
              onToggle={handleMuscleGroupsToggle}
            />
          </div>
          <div className="form-toggle-section">
            <h3>Body parts</h3>
            <ToggleButtonGroup
              buttonsData={[
                { label: "CHEST", checked: bodyParts.chest, key: "chest" },
                {
                  label: "UPPER BACK",
                  checked: bodyParts.upperBack,
                  key: "upperBack",
                },
                {
                  label: "LOWER BACK",
                  checked: bodyParts.lowerBack,
                  key: "lowerBack",
                },
                { label: "BICEPS", checked: bodyParts.biceps, key: "biceps" },
                {
                  label: "TRICEPS",
                  checked: bodyParts.triceps,
                  key: "triceps",
                },
                {
                  label: "FOREARMS",
                  checked: bodyParts.forearms,
                  key: "forearms",
                },
                { label: "ABS", checked: bodyParts.abs, key: "abs" },
                {
                  label: "OBLIQUES",
                  checked: bodyParts.obliques,
                  key: "obliques",
                },
                { label: "QUADS", checked: bodyParts.quads, key: "quads" },
                {
                  label: "HAMSTRINGS",
                  checked: bodyParts.hamstrings,
                  key: "hamstrings",
                },
                { label: "CALVES", checked: bodyParts.calves, key: "calves" },
                { label: "GLUTES", checked: bodyParts.glutes, key: "glutes" },
              ]}
              onToggle={handleBodyPartsToggle}
            />
          </div>

          <div className="form-toggle-section">
            <h3>Duration</h3>
            <ToggleButtonGroup
              buttonsData={[
                {
                  label: "<1HR",
                  checked: duration.lessThanOneHr,
                  key: "lessThanOneHr",
                },
                {
                  label: "1-2HRS",
                  checked: duration.oneToTwoHrs,
                  key: "oneToTwoHrs",
                },
                {
                  label: ">2HRS",
                  checked: duration.greaterThanTwoHrs,
                  key: "greaterThanTwoHrs",
                },
              ]}
              onToggle={handleDurationToggle}
            />
          </div>

          <div className="form-toggle-section">
            <h3>Workout type</h3>
            <ToggleButtonGroup
              buttonsData={[
                {
                  label: "WEIGHT-LIFTING",
                  checked: workoutType.weightLifting,
                  key: "weightLifting",
                },
                {
                  label: "BODYWEIGHT",
                  checked: workoutType.bodyweight,
                  key: "bodyweight",
                },
              ]}
              onToggle={handleWorkoutTypeToggle}
            />
          </div>
          <div className="submit-btn-wrapper">
            <button type="submit" className="submit-btn">
              Generate
            </button>
          </div>
        </form>
      </div>

      <div className="workout">
        <h2>Workout</h2>
        <div className="workout-content">
          <h3>
            Select muscle groups AND/OR body parts AND duration AND workout
            type, and click ‘Generate’
          </h3>
          {notebookLines}
        </div>
      </div>
    </div>
  );
};

export default NoteBook;
