
import './App.css';
import Circle from './components/Circle/circle.tsx';
import {useState} from 'react';



const App = () => {
const [circleItem, setCircleItem] = useState<number[]>([5, 11, 16, 23, 32]);
const changeNumbers = () =>{
  let arrayOfNumbers: number[] =  [];
  const getRandom = () => { // min and max included
    return Math.floor(Math.random() * 32 + 5);
  };

  while (arrayOfNumbers.length < 5) {
    const rand = getRandom();
    if (!arrayOfNumbers.includes(rand)) {
      arrayOfNumbers.push(rand);
    }
  }
  arrayOfNumbers.sort((a:number, b:number) => a - b);
setCircleItem(arrayOfNumbers);
};

  return (
      <>
        <button onClick={changeNumbers} className="btn" type="button">New numbers</button>
        <div className="circles">
          <Circle numberOfCircle={circleItem[0]}/>
          <Circle numberOfCircle={circleItem[1]}/>
          <Circle numberOfCircle={circleItem[2]}/>
          <Circle numberOfCircle={circleItem[3]}/>
          <Circle numberOfCircle={circleItem[4]}/>
        </div>
      </>
  );
};

export default App;
