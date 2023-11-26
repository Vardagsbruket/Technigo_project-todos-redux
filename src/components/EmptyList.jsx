import { useDispatch } from "react-redux";
import { openModal, openProjectModal } from "../reducers/modelSlice";

export const EmptyList = ({ type }) => {
  const dispatch = useDispatch();
  return (
    <div className="emptyState">
      <div className="emptyStateHeader">
        <span>No {type} added yet!</span>
      </div>
      <div style={{ backgroundColor: "var(--pure-white)", minHeight: "50px" }}>
        {type === "tasks" && (
          <button onClick={() => dispatch(openModal())}>Add Task</button>
        )}
        {type === "projects" && (
          <button onClick={() => dispatch(openProjectModal())}>
            Add Project
          </button>
        )}
      </div>
    </div>
  );
};
