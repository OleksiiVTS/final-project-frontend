import { startOfDay, endOfDay } from 'date-fns';

const getDayTasks = (day, tasks) => {
  if (tasks) {
    return tasks.filter(
      task =>
        new Date(task.date).getTime() >= startOfDay(day).getTime() &&
        new Date(task.date).getTime() < endOfDay(day).getTime()
    );
  }
};

export default getDayTasks;
