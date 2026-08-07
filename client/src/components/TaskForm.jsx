import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import API from "../services/api";


const TaskForm = ({ fetchTasks, editingTask, setEditingTask }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    priority: "Low",
    dueDate: "",
  });

  useEffect(() => {
    if (editingTask) {
      setFormData({
        title: editingTask.title,
        description: editingTask.description,
        priority: editingTask.priority,
        dueDate: editingTask.dueDate
          ? editingTask.dueDate.substring(0, 10)
          : "",
      });
    }
  }, [editingTask]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingTask) {
        await API.put(`/tasks/${editingTask._id}`, formData);
        toast.success("Task Updated Successfully!");
        setEditingTask(null);
      } else {
        await API.post("/tasks", formData);
        toast.success("Task Added Successfully!");
      }

      fetchTasks();

      setFormData({
        title: "",
        description: "",
        priority: "Low",
        dueDate: "",
      });

    } catch (error) {
      toast.error(error.response?.data?.message || "Operation Failed");
    }
  };

  return (
    <div className="task-form">
      <h2>
        {editingTask ? "Edit Task" : "Add New Task"}
      </h2>

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

        <button type="submit">
          {editingTask ? "Update Task" : "Add Task"}
        </button>

      </form>
    </div>
  );
};

export default TaskForm;