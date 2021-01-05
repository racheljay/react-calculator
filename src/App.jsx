import React, { useEffect, useState } from 'react';


function App() {

  const topRow = ['AC', '+/-', '%'];
  const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, '.'];
  const operators = ['/', '*', '-', '+', '='];

  const [currentDisplay, setCurrentDisplay] = useState(0)
  const [displayArr, setDisplayArr] = useState([0]);
  const [clickCount, setClickCount] = useState(0)

  useEffect(() => {
    console.log('did mount')
  })


  const numBtnAction = (num) => {

    setClickCount(clickCount + 1);
    let arr = displayArr
    
    if (arr[0] === 0) {
      arr.shift();
      // return this.numBtnAction;
  }
    console.log('click count', clickCount)
    // number = arr.join(' ')
    console.log('num', num)
    arr.push(num)
    setDisplayArr(arr);
    setCurrentDisplay(arr.join(' '))
    console.log('arr', arr)
    console.log('display arr', displayArr)
    // return number;
    // if (arr.length > 0) setCurrentDisplay(number)

    // setDisplayArr(arr)
    // console.log('state',displayArr)
    // setCurrentDisplay(num)
  }

  return (
    <div className="container">

      <div className="row">
        <div className="col-12 border">{currentDisplay}</div>
      </div>

      <div className="row">
        <div className="col-9 border">
          <div className="row">

            {topRow.map((item, index) => {
              return <div key={index} className="col-4 border" >{item}</div>
            })}

            {numbers.map((item, index) => {
              return <div key={index} className="col-4 border" onClick={() => numBtnAction(item)}>{item}</div>
            })}

          </div>
        </div>

        <div className="col-3 border">

          <div className="row">
            {operators.map((item, index) => {
              return <div key={index} className="col-12 border">{item}</div>

            })}


          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
