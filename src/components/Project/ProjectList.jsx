import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { ProjectCard } from "./ProjectCard";
import { EmptyList } from "../EmptyList";
import { updateLocalStorage } from "../../reducers/projectSlice";
import "./ProjectList.css";

export const ProjectList = () => {
  const dispatch = useDispatch();
  const projectList = useSelector((state) => state.projects.projectList);

  useEffect(() => {
    dispatch(updateLocalStorage());
  }, [projectList]);

  return (
    <section className="projectList">
      {projectList.length < 1 && <EmptyList type={"projects"} />}
      {projectList?.map((project) => (
        <ProjectCard key={project.createdDate} project={project} />
      ))}
    </section>
  );
};
