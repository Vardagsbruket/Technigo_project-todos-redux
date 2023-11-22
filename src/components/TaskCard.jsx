import React from "react";

export const TaskCard = ({
  createdDate,
  name,
  comment,
  category,
  isDone,
  deadline,
}) => {
  return (
    <div>
      <div>
        <span>{category}</span>
        <span>{name}</span>
        <span>{isDone}</span>
      </div>
      <div>{comment}</div>
      <div>
        <div>
          <button>Remove</button>
        </div>
        <div>
          <span>Deadline:{deadline}</span>
          <span>Date:{createdDate}</span>
        </div>
      </div>
    </div>
  );
};
