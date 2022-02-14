import React from "react";

function CheckList({ item, checkItem, index }) {
  return (
    <div>
      <input
        type="checkbox"
        style={{ height: "auto" }}
        onClick={() => checkItem(item, index)}
        checked={item.isDone}
        onChange={() => {}}
      />{" "}
      <span style={item.isDone ? { textDecoration: "line-through" } : null}>
        {item.valuee}{" "}
      </span>
    </div>
  );
}

export default CheckList;
