import { React, useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles/addWorkout.css";
import AddWorkoutForm from "./forms/addWorkoutForm";

const AddWorkout = () => {
  const [modalView, setModalView] = useState(false);

  const handleModalClick = (e) => {
    setModalView(!modalView);
  };

  return (
    <div>
      {modalView ? (
        <div>
          <AddWorkoutForm modalControl={setModalView} />
        </div>
      ) : null}
      <button onClick={handleModalClick}>
        <i class="bi bi-plus"></i>
      </button>
    </div>
  );
};

export default AddWorkout;
