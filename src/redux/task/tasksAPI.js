import { $instance } from 'redux/auth/authOperations';

export async function addTask(newTask) {
  const response = await $instance.post(`/tasks`, newTask);
  return response.data;
}

export async function getTasks(interval) {
  const response = await $instance.get(`/tasks/?date=${interval}`);
  return response.data;
}

export async function deleteTask(taskID) {
  const response = await $instance.delete(`/tasks/${taskID}`);
  return response.data;
}

export async function editTask(task) {
  const { title, start, end, priority, date, category } = task;
  const response = await $instance.patch(`/tasks/${task._id}`, {
    title,
    start,
    end,
    priority,
    date,
    category,
  });
  return response.data;
}
