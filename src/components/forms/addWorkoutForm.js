import { React, useRef } from "react";
import axios from "axios";

const AddWorkoutForm = ({ modalControl }) => {
  const nameRef = useRef(null);

  const submitRequest = async (e) => {
    e.preventDefault();
    const data = { name: nameRef.current.value };
    try {
      await axios.post("/api/addexercise", data);
      modalControl();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <form onSubmit={submitRequest}>
        <fieldset>
          <label>
            <h2>Add Workout</h2>
            <input name="name" ref={nameRef} />
          </label>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddWorkoutForm;
