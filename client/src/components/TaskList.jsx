import API from "../services/api";
import { toast } from "react-toastify";

function TaskList({ tasks, fetchTasks,setEditingTask}) {
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this task?")) {
      return;
    }

    try {
      await API.delete(`/tasks/${id}`);

      toast.success("Task deleted successfully!");

      fetchTasks();

    } catch (error) {
      toast.error(error.response?.data?.message || "Delete failed");
    }
  };

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
            <button onClick={() => setEditingTask(task)}>Edit</button>
            <button onClick={() => handleDelete(task._id)}>Delete</button>
          </div>

        </div>
      ))}
    </div>
  );
}

export default TaskList;