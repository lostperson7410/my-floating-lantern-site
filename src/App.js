import logo from "./logo.svg";
import "./App.css";
import Water from "./component/Water/Water";
import Foalt from "./component/Foalt/Foalt";
import { useEffect, useState } from "react";

const data = [];

function App() {
  const [data, setData] = useState([...new Array(0)]);
  const [title, setTitle] = useState("");

  function addFloatElement() {
    setData((prevData) => {
      const newData = [...prevData];
      newData.push({ title: title }); // Add an object with the 'title' property
      return newData;
    });
    setTitle("");

    // const currentArr = data
    // let temp =[]
    // setData((prevData) => [{ ...prevData, title: title }, 1]); // Adding an element to the array
  }

  function removeFloatElement() {
    if (data.length > 0) {
      setData((prevData) => prevData.slice(0, -1)); // Removing the last element from the array
    }
  }
  return (
    <div className="App">
      <div className="main">
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: "100%",
            justifyContent: "center",
          }}
        >
          <div className="btnAdd" onClick={() => addFloatElement()}>
            Wish
          </div>
          <input
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="itemContainer">
          {data?.map((item, index) => {
            console.log(item);
            return <Foalt title={item?.title} />;
          })}
        </div>
        <Water />
      </div>
    </div>
  );
}

export default App;
