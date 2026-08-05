import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import TaskList from "../components/TaskList";
import TaskForm from "../components/TaskForm";
import API from "../services/api";

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      setLoading(true);

      const response = await API.get("/tasks");

      setTasks(response.data);
      setError("");
    } catch (err) {
      setError("Failed to load tasks.");
    } finally {
      setLoading(false);
    }
  };

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = task.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesFilter =
      filter === "All" || task.priority === filter;

    return matchesSearch && matchesFilter;
  });

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;
  const pendingTasks = tasks.filter(task => !task.completed).length;
  const highPriorityTasks = tasks.filter(task => task.priority === "High").length;

  return (
    <>
      <Navbar />

      <div className="dashboard">
        <h1>Dashboard</h1>

        <div className="dashboard-counts">
          <p><strong>Total:</strong> {totalTasks}</p>
          <p><strong>Completed:</strong> {completedTasks}</p>
          <p><strong>Pending:</strong> {pendingTasks}</p>
          <p><strong>High Priority:</strong> {highPriorityTasks}</p>
        </div>

        <br />

        <input
          type="text"
          placeholder="Search tasks..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <br /><br />

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">All Priorities</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>

        <br /><br />

        <TaskForm fetchTasks={fetchTasks} />

        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <TaskList tasks={filteredTasks} />
        )}
      </div>
    </>
  );
}

export default Dashboard;