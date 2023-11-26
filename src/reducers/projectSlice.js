import { createSlice } from "@reduxjs/toolkit";

const getTasksFromLocalStorage = () => {
  const storedProjects = localStorage.getItem("projectList");
  const emptyList = [];
  if (storedProjects) {
    return JSON.parse(storedProjects);
  } else {
    return emptyList;
  }
};

const initialState = {
  projectList: getTasksFromLocalStorage(),
};

// const initialState = {
//   projectList: [
//     {
//       projectName: "December month project",
//       createdDate: 1700729781222,
//       isDone: true,
//       tasks: [
//         {
//           createdDate: 7700729781605,
//           name: "Watch video on actions & reducers",
//           comment: "Do it properly",
//           deadline: "",
//           category: "House",
//           isDone: true,
//         },
//         {
//           createdDate: 9000729871043,
//           name: "Follow redux code along",
//           comment: "Do it properly",
//           deadline: "",
//           category: "Garden",
//           isDone: true,
//         },
//       ],
//     },
//     {
//       projectName: "January project",
//       createdDate: 1700729788800,
//       isDone: false,
//       tasks: [
//         {
//           createdDate: 1705729783000,
//           name: "Implement authentication",
//           comment: "Secure the application",
//           deadline: "",
//           category: "Other",
//           isDone: false,
//         },
//         {
//           createdDate: 1700729984000,
//           name: "Design landing page",
//           comment: "Create an attractive landing page",
//           deadline: "",
//           category: "Other",
//           isDone: false,
//         },
//       ],
//     },
//     {
//       projectName: "Spring cleanup",
//       createdDate: 1700999785000,
//       isDone: false,
//       tasks: [
//         {
//           createdDate: 1400729786000,
//           name: "Clean the garage",
//           comment: "Dispose of unnecessary items",
//           deadline: "",
//           category: "House",
//           isDone: false,
//         },
//         {
//           createdDate: 1700726787000,
//           name: "Prune the garden",
//           comment: "Get the garden ready for spring",
//           deadline: "",
//           category: "Garden",
//           isDone: false,
//         },
//       ],
//     },
//     {
//       projectName: "Summer vacation planning",
//       createdDate: 1700119788000,
//       isDone: false,
//       tasks: [
//         {
//           createdDate: 1730729789000,
//           name: "Book flights",
//           comment: "Find the best deals",
//           deadline: "",
//           category: "Other",
//           isDone: false,
//         },
//         {
//           createdDate: 1722729790000,
//           name: "Research accommodation",
//           comment: "Look for comfortable stay options",
//           deadline: "",
//           category: "Other",
//           isDone: false,
//         },
//       ],
//     },
//   ],
//   addProjectTasks: false,
//   projectId: undefined,
// };

export const projects = createSlice({
  name: "projects",
  initialState,
  reducers: {
    addProject: (state, action) => {
      state.projectList.push(action.payload);
    },

    removeProject: (state, action) => {
      const filteredList = state.projectList.filter(
        (project) => project.createdDate !== action.payload
      );
      state.projectList = filteredList;
    },
    addProjectTask: (state, action) => {
      if (state.projectId !== undefined) {
        state.projectList = state.projectList.map((project) => {
          if (project.createdDate === state.projectId) {
            return {
              ...project,
              tasks: [...project.tasks, action.payload],
            };
          }
          return project;
        });
        state.projectId = undefined;
        state.addProjectTasks = false;
      }
    },

    setAddProjectTask: (state, action) => {
      state.addProjectTasks = true;
      state.projectId = action.payload.projectId;
    },
    projectTaskIsDone: (state, action) => {
      const { projectId, taskId } = action.payload;
      const project = state.projectList.find(
        (proj) => proj.createdDate === projectId
      );
      if (project) {
        const task = project.tasks.find((task) => task.createdDate === taskId);
        if (task) {
          task.isDone = !task.isDone;
        }
        const allTasksDone = project.tasks.every((task) => task.isDone);

        project.isDone = allTasksDone;
      }
    },
    projectIsDone: (state, action) => {
      const project = state.projectList.find(
        (proj) => proj.createdDate === action.payload
      );
      if (project) {
        project.tasks.map((task) => {
          task.isDone = !task.isDone;
        });
        project.isDone = !project.isDone;
      }
    },

    removeProjectTask: (state, action) => {
      const { projectId, taskId } = action.payload;

      state.projectList = state.projectList.map((project) => {
        if (project.createdDate === projectId) {
          const updatedTasks = project.tasks.filter(
            (task) => task.createdDate !== taskId
          );
          return {
            ...project,
            tasks: updatedTasks,
          };
        }
        return project;
      });
    },
    updateLocalStorage: (state) => {
      const localStore = JSON.stringify(state.projectList);
      localStorage.setItem("projectList", localStore);
    },
  },
});

export const {
  addProject,
  removeProject,
  removeProjectTask,
  addProjectTask,
  setAddProjectTask,
  projectTaskIsDone,
  projectIsDone,
  updateLocalStorage,
} = projects.actions;
