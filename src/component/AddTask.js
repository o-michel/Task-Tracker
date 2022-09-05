import { useState } from "react";

const AddTask = ({ addtasks }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const onAdd = (e) => {
    e.preventDefault();

    if (text === "") {
      alert("Pls type in to the input field ");
      return;
    }
    // console.log(addtasks);

    addtasks({ text, day, reminder });

    setText("");
    setDay("");
    setReminder(false);
  };

  return (
    <form className="add-form" onSubmit={onAdd}>
      <div className="forn-control">
        <label className="toCenter">Task</label>
        <input
          type="text"
          placeholder="Add Task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>{" "}
      <div className="forn-control">
        <label className="toCenter">Day & Time</label>
        <input
          type="text"
          placeholder="Add Day & Time"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className="forn-control">
        <label className="forReminder">Set Reminder</label>
        <input
          className="clickCheck"
          type="checkbox"
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>
      <input className="saveTaskBtn" type="submit" value="Save Task" />
    </form>
  );
};

export default AddTask;
