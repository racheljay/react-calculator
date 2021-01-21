import React, { useEffect, useState } from 'react';


function App() {

  const topRow = ['AC', '+/-', '%'];
  const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
  const operators = ['/', '*', '-', '+', "="];

  const [currentDisplay, setCurrentDisplay] = useState("0");
  const [displayArr, setDisplayArr] = useState([0]);
  const [previousNumber, setPreviousNumber] = useState("0");
  const [screenRefresh, setScreenRefresh] = useState(false);
  const [memUpdated, setMemUpdated] = useState(false);
  const [operator, setOperator] = useState('');
  const [answer, setAnswer] = useState('')

  useEffect(() => {
    // console.log('did mount')
    console.log('screen refresh', screenRefresh)
  })


  const numBtnAction = (num) => {

    if (screenRefresh) {
      setCurrentDisplay(num.toString());
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
      console.log(screenRefresh)
            
    }


  }

  const doMath = (btn) => {
    const math = {
      '+': (x, y) => { return x + y },
      '-': (x, y) => { return x - y },
      '*': (x, y) => { return x * y },
      '/': (x, y) => { return x / y }
    }

    let solution = 0

    if (memUpdated) {

      solution = math[btn](parseInt(previousNumber), parseInt(currentDisplay))
      setAnswer(solution.toString())
    }
    return solution;
  }


  const operatorAction = (btn) => {
    console.log(btn)
    if(!operator){
      setPreviousNumber(currentDisplay)
    } else {
      setPreviousNumber(doMath(operator))
    }
    setMemUpdated(true);
    setScreenRefresh(true);

    if (btn !== '=') {
      setOperator(btn)
      console.log('opertaor state', operator)
    }

    if(btn === '=') {
      doMath(operator)
      // setCurrentDisplay(previousNumber)
      setOperator('')
      setPreviousNumber("0")
      setMemUpdated(false)
    }

    // doMath(btn)

    // console.log('solution',solution)

    // //equals
    // //need to add a block so that it doesn't freak out when you hit it twice
    // if (btn === operators[4]) {
    //   sum && setCurrentDisplay(sum().toString());
    //   // diff && setCurrentDisplay(diff().toString())
    //   setPreviousNumber("0")
    //   setMemUpdated(false)
    // }

  }

  const topRowAction = (btn) => {
    console.log(btn)

    //clear out
    if (btn === topRow[0]) {
      setCurrentDisplay("0");
      setDisplayArr([0])
      setPreviousNumber("0")
      setScreenRefresh(false)
      setMemUpdated(false)
      setOperator('')
      setAnswer('')
    }

    //make negative or positive
    if (btn === topRow[1]) {
      if (currentDisplay !== 0) {
        setCurrentDisplay(currentDisplay * -1)
      }
    }

    //percent button
    if(btn === topRow[2]) {
      setCurrentDisplay(currentDisplay * 0.01)
    }

  }
  return (
    <div className="container">

      <div className="row">
        <div className="col-12 display-4 p-3 border">{!screenRefresh ? currentDisplay : answer ? answer : previousNumber }</div>
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

      <h1>Current Number: {currentDisplay} Number Memory: {previousNumber} Current answer: {answer}</h1>
      <h2>current operator: {operator}</h2>

    </div>
  );
}

export default App;
