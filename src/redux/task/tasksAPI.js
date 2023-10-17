import { $instance } from 'redux/auth/authOperations';

export async function addTask(newTask) {
  const response = await $instance.post(`/tasks`, newTask);
  return response.data;
}

export async function getTasks() {
  const response = await $instance.get(`/tasks`);
  return response.data;
}

export async function deleteTask(taskID) {
  const response = await $instance.delete(`/tasks/${taskID}`);
  return response.data;
}

export async function editTask(task) {
  const response = await $instance.patch(`/tasks/${task._id}`, {
    ...task,
  });
  return response.data;
}
