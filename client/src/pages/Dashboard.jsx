import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import TaskList from "../components/TaskList";
import API from "../services/api";

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

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
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <div className="dashboard">
        <h1>Dashboard</h1>

        <button>Add New Task</button>

        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <TaskList tasks={tasks} />
        )}
      </div>
    </>
  );
}

export default Dashboard;