

let tasks = [
    { id: 1, task: "Learn HTTP Methods", status: "Incomplete" },
    { id: 2, task: "Organize Project Structure", status: "Complete" },
  ];
  
  module.exports = {
    getAllTasks: () => tasks,  
    addTask: (newTask) => {
      const id = tasks.length + 1;
      const task = { id, ...newTask };
      tasks.push(task);
      return task;
    },
    updateTask: (id, updatedData) => {
      const taskIndex = tasks.findIndex(task => task.id === id);
      if (taskIndex === -1) return null;
      tasks[taskIndex] = { ...tasks[taskIndex], ...updatedData };
      return tasks[taskIndex];
    },
    deleteTask: (id) => {
      const taskIndex = tasks.findIndex(task => task.id === id);
      if (taskIndex === -1) return null;
      const deletedTask = tasks.splice(taskIndex, 1);
      return deletedTask[0];
    }
  };
  