
import './App.css'
import Circle from "./components/Circle/circle.tsx";
import {useState} from "react";


const App = () => {
const [circleItem, setCircleItem] = useState<number[]>([5, 11, 16, 23, 32]);

  return (
      <>
        <button className="btn" type="button">New numbers</button>
        <div className="circles">
          <Circle numberOfCircle={circleItem[0]}/>
          <Circle numberOfCircle={circleItem[1]}/>
          <Circle numberOfCircle={circleItem[2]}/>
          <Circle numberOfCircle={circleItem[3]}/>
          <Circle numberOfCircle={circleItem[4]}/>
        </div>
      </>
  )
};

export default App
