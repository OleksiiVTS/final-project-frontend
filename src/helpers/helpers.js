export const filterDayTasks = (monthTasks, day) => {
  return monthTasks.filter(task => task.date.slice(-2) === day);
};

export const CreateSortedTasks = (categories, tasks) => {
  const obj = {};
  categories.forEach(cat => (obj[cat] = []));
  tasks.forEach(task => obj[task.category].push(task));
  return obj;
};

export const parseCategoryTitle = category => {
  const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1);

  return capitalize(category).replace('-', ' ');
};
