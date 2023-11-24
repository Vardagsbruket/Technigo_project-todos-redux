import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProject } from "../../reducers/projectSlice";
import { closeProjectModal } from "../../reducers/modelSlice";
import "./AddProject.css";

export const AddProject = () => {
  const [projectName, setTask] = useState("");
  const dispatch = useDispatch();

  const handleProjectSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addProject({
        projectName: projectName,
        createdDate: new Date().getTime(),
        isDone: false,
        tasks: [],
      })
    );
    dispatch(closeProjectModal());
  };

  const handleClick = () => {
    dispatch(closeProjectModal());
  };
  return (
    <div className="addProjectContainer">
      <div className="addTask">
        <div className="addTaskHeader">
          <h3>Add Project</h3>
          <span onClick={handleClick} className="close">
            Close
          </span>
        </div>
        <div className="addTaskForm">
          <form onSubmit={handleProjectSubmit}>
            <div className="projectName">
              <label htmlFor="project">Project Name:</label>
              <input
                type="text"
                id="project"
                name="project"
                value={projectName}
                onChange={(e) => setTask(e.target.value)}
              />
            </div>
            <button type="submit">Create</button>
          </form>
        </div>
      </div>
    </div>
  );
};
