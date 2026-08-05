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
          <h3>{task.title}</h3>

          <p>{task.description}</p>

          <p><strong>Priority:</strong> {task.priority}</p>

          <p>
            <strong>Due Date:</strong>{" "}
            {task.dueDate
              ? new Date(task.dueDate).toLocaleDateString()
              : "No Due Date"}
          </p>

          <p>
            <strong>Completed:</strong>{" "}
            {task.completed ? "Yes" : "No"}
          </p>

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