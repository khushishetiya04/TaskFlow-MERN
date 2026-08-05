import { useState } from "react";
import { toast } from "react-toastify";
import API from "../services/api";


const TaskForm = ({ fetchTasks }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    priority: "Low",
    dueDate: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/tasks", formData);

      toast.success("Task Added Successfully!");

      // Refresh task list
      fetchTasks();

      // Clear form
      setFormData({
        title: "",
        description: "",
        priority: "Low",
        dueDate: "",
      });

    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to add task");
    }
  };

  return (
    <div className="task-form">
      <h2>Add New Task</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Enter Title"
          value={formData.title}
          onChange={handleChange}
          required
        />

        <br /><br />

        <textarea
          name="description"
          placeholder="Enter Description"
          value={formData.description}
          onChange={handleChange}
        />

        <br /><br />

        <select
          name="priority"
          value={formData.priority}
          onChange={handleChange}
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>

        <br /><br />

        <input
          type="date"
          name="dueDate"
          value={formData.dueDate}
          onChange={handleChange}
        />

        <br /><br />

        <button type="submit">Add Task</button>

      </form>
    </div>
  );
};

export default TaskForm;