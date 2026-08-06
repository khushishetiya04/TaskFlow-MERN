function TaskList({ tasks }) {
  if (tasks.length === 0) {
    return (
      <div className="task-list">
        <p>No Tasks Available</p>
      </div>
    );
  }

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <div className="task-card" key={task._id}>

          <div className="task-header">
            <h3>{task.title}</h3>

            <span className={`priority ${task.priority.toLowerCase()}`}>
              {task.priority}
            </span>
          </div>

          <p>{task.description || "No description provided."}</p>

          <div className="task-info">

            <span>
              📅{" "}
              {task.dueDate
                ? new Date(task.dueDate).toLocaleDateString()
                : "No Due Date"}
            </span>

            <span
              className={
                task.completed ? "status done" : "status pending"
              }
            >
              {task.completed ? "Completed" : "Pending"}
            </span>

          </div>

          <div className="task-actions">
            <button>Edit</button>
            <button>Delete</button>
          </div>

        </div>
      ))}
    </div>
  );
}

export default TaskList;