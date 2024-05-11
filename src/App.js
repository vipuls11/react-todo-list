import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [list, setList] = useState();
  const [item, setItem] = useState([]);

  const listEventhandler = (e) => {
    setList(e.target.value);
  };

  const listhandler = () => {
    setItem((oldItems) => {
      return [...oldItems, list];
    });

    setList("");
  };

  const deletelist = (id) => {
    console.log("deleted");
    setItem((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1 className="">Todo List</h1>
          <br />
          <input
            type="text"
            placeholder="Add a Items"
            onChange={listEventhandler}
            value={list}
          />
          <button type="" className="" onClick={listhandler}>
            +
          </button>
          <p>List are show below to this</p> <hr />
          <ul>
            {/* <li>{list}</li> */}
            <li>
              {item.map((itemvalue, index) => {
                return (
                  <div
                    onSelect={deletelist}
                    key={index}
                    id={index}
                    className="todo_style"
                  >
                    <p>{itemvalue}</p>
                    <i
                      className="fa-solid fa-circle-xmark"
                      onClick={() => {
                        deletelist(index);
                      }}
                    ></i>
                  </div>
                );
              })}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default App;
