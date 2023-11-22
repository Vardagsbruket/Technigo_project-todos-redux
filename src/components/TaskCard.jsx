import "./taskCard.css";

export const TaskCard = ({
  createdDate,
  name,
  comment,
  category,
  isDone,
  deadline,
}) => {
  return (
    <div className="todoCard">
      <div className="todoCardHeader">
        <span className="todoCardCategory">{category}</span>
        <span className="todoCardName">{name}</span>
        <span className="todoCardIsDone">{isDone}</span>
      </div>
      <div className="todoCardComment">{comment}</div>
      <div className="todoCardInfo">
        <div>
          <button className="todoCardRemove">Remove</button>
        </div>
        <div className="todoCardDateInfo text-small">
          <span>Deadline:{deadline}</span>
          <span>Date:{createdDate}</span>
        </div>
      </div>
    </div>
  );
};
