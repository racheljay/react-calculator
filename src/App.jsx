import React, { useEffect, useState } from 'react';


function App() {

  const topRow = ['AC', '+/-', '%'];
  const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, '.'];
  const operators = ['/', '*', '-', '+', '='];

  const [currentDisplay, setCurrentDisplay] = useState("0");
  const [displayArr, setDisplayArr] = useState([0]);
  const [previousNumber, setPreviousNumber] = useState("0");
  const [screenRefresh, setScreenRefresh] = useState(false)

  // useEffect(() => {
  //   console.log('did mount')
  // })


  const numBtnAction = (num) => {

    if (screenRefresh) {
      setCurrentDisplay(num);
      setDisplayArr([num])
      setScreenRefresh(false);
    } else if (!screenRefresh) {


      let arr = displayArr

      if (arr[0] === 0) {
        arr.shift();
      }
      console.log('num', num)
      arr.push(num)
      setDisplayArr(arr);
      setCurrentDisplay(arr.join(''))

      console.log('current display type', typeof currentDisplay)
    }
   
  }

  const operatorAction = (btn) => {
    console.log(btn)
    setPreviousNumber(currentDisplay)
    setScreenRefresh(true);
    
    let sum = (parseInt(previousNumber) + parseInt(currentDisplay))
    let minus = (parseInt(previousNumber) + (parseInt(currentDisplay) * -1)   )

    // console.log(memory, previousNumber, currentDisplay, current)

    if(btn === operators[2]) {
      setPreviousNumber(minus.toString())
    }

    //addition
    if(btn === operators[3]) {
      console.log('sum', sum);
      setPreviousNumber(sum.toString());
    } 
    
    if(btn === operators[4]) {
      setCurrentDisplay(sum.toString());
      setPreviousNumber("0")
    }
    //equals
    
    

  }

  const topRowAction = (btn) => {
    console.log(btn)

    //clear out
    if (btn === topRow[0]) {
      setCurrentDisplay("0");
      setDisplayArr([0])
      setPreviousNumber("0")
      setScreenRefresh(false)
    }

    //make negative or positive
    // if (btn === topRow[1]) {
    //   if (currentDisplay !== 0) {
    //     setCurrentDisplay(currentDisplay * -1)
    //   }
    // }

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
