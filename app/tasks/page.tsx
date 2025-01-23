const Tasks = async () => {
  const response = await fetch("http://localhost:3000/api/tasks");
  const tasks = await response.json();
  console.log(tasks);
  return <div>Tasks</div>;
};

export default Tasks;
