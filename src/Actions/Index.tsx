export const ADD_TASK = "ADDTASK";
export const DELETE_TASK = "DELETETASK";

export const addTask = (task: any) => ({
  type: "ADD_TASK",
  payload: task,
});

export const deleteTask = (index: any) => ({
  type: "DELETE_TASK",
  payload: index,
});
