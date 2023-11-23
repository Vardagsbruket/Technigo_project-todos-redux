import { IconTrash } from "../assets/icons2";
import { IconHouse } from "../assets/icons2";
import { IconBill } from "../assets/icons2";
import { IconShop } from "../assets/icons2";
import { IconOther } from "../assets/icons2";
import { IconGarden } from "../assets/icons2";
import { IconCheck } from "../assets/icons2";
import { IconUnCheck } from "../assets/icons2";
import { tasks } from "../reducers/tasksSlice";
import "./TaskCard.css";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export const TaskCard = ({
  createdDate,
  name,
  comment,
  category,
  isDone,
  deadline,
}) => {
  const dispatch = useDispatch();
  const taskList = useSelector((state) => state.tasks.tasksList);
  const getCategory = () => {
    switch (category) {
      case "House":
        return <IconHouse />;
        break;
      case "Shop":
        return <IconShop />;
        break;
      case "Bill":
        return <IconBill />;
        break;
      case "Garden":
        return <IconGarden />;
        break;
      case "Other":
        return <IconOther />;
    }
  };

  return (
    <div className="todoCard">
      <div className="todoCardHeader">
        {getCategory(category)}
        <span className="todoCardName">{name}</span>
        <span
          className="todoCardIsDone"
          onClick={() => dispatch(tasks.actions.handleIsDone(createdDate))}
        >
          {isDone ? <IconCheck /> : <IconUnCheck />}
        </span>
      </div>
      <div className="todoCardComment">{comment}</div>
      <div className="todoCardInfo">
        <div>
          <span
            onClick={() => dispatch(tasks.actions.removeTask(createdDate))}
            className="todoCardRemove"
          >
            <IconTrash />
          </span>
        </div>
        <div className="todoCardDateInfo text-small">
          <span>Deadline:{deadline}</span>
          <span>Date:{createdDate}</span>
        </div>
      </div>
    </div>
  );
};
