const Task = ({ task, onDelete, onToggle }) => {
  // const cancel = "x"
  return (
    <div
      className={`task ${task.reminder ? "remainder" : ""}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3 color="red">
        {task.text}{" "}
        <p className="cancelBtn" onClick={() => onDelete(task.id)}>
          x
        </p>
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
