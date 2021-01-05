import React, { useEffect, useState } from 'react';


function App() {

  const topRow = ['AC', '+/-', '%'];
  const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, '.'];
  const operators = ['/', '*', '-', '+', '='];

  const [currentDisplay, setCurrentDisplay] = useState(0);
  const [displayArr, setDisplayArr] = useState([0]);
  const [previousNumber, setPreviousNumber] = useState("");
  const [screenRefresh, setScreenRefresh] = useState(false)

  useEffect(() => {
    console.log('did mount')
  })


  const numBtnAction = (num) => {

    if (screenRefresh === true) {
      setCurrentDisplay(num);
      setDisplayArr([num])
      setScreenRefresh(false);
    } else if (screenRefresh === false) {


      let arr = displayArr

      if (arr[0] === 0) {
        arr.shift();
      }
      console.log('num', num)
      arr.push(num)
      setDisplayArr(arr);
      setCurrentDisplay(arr.join(' '))

      console.log('current display type', typeof currentDisplay)
    }
    // return number;
    // if (arr.length > 0) setCurrentDisplay(number)

    // setDisplayArr(arr)
    // console.log('state',displayArr)
    // setCurrentDisplay(num)
  }

  const operatorAction = (btn) => {
    console.log(btn)
    setPreviousNumber(currentDisplay)
    setScreenRefresh(true);

  }

  const topRowAction = (btn) => {
    console.log(btn)

    if (btn === topRow[0]) {
      setCurrentDisplay(0);
      setDisplayArr([0])
    }

    if (btn === topRow[1]) {
      if (currentDisplay !== 0) {
        setCurrentDisplay(currentDisplay * -1)
      }
    }

  }
  return (
    <div className="container">

      <div className="row">
        <div className="col-12 p-3 border">{currentDisplay}</div>
      </div>

      <div className="row">
        <div className="col-9 border">
          <div className="row">

            {topRow.map((item, index) => {
              return <div key={index} className="col-4 p-2 border" onClick={() => topRowAction(item)} >{item}</div>
            })}

            {numbers.map((item, index) => {
              return <div key={index} className="col-4 p-2 border" onClick={() => numBtnAction(item)}>{item}</div>
            })}

          </div>
        </div>

        <div className="col-3 border">

          <div className="row">
            {operators.map((item, index) => {
              return <div key={index} className="col-12 p-2 border" onClick={() => operatorAction(item)}>{item}</div>

            })}


          </div>
        </div>
      </div>

      <h1>Number Memory: {previousNumber}</h1>

    </div>
  );
}

export default App;
