import React from "react";
import CheckList from "./CheckList";

function ListItems({ userinfo, isChecked, deleteItem }) {
  return (
    <div>
      {userinfo.list.map((item, index) => (
        <li
          style={{
            backgroundColor: "red",
            borderColor: "black",
            border: "2px",
            margin: "4px",
          }}
          key={item.id}
        >
          <CheckList item={item} checkItem={isChecked} index={index}/>
          <button onClick={() => deleteItem(item.id)}>Delete</button>{" "}
        </li>
      ))}
    </div>
  );
}

export default ListItems;
