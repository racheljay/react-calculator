import React, { useState } from 'react';


function App() {

  const topRow = ['AC', '+/-', '%'];
  const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, '.'];
  const operators = ['/', '*', '-', '+', '='];

  const [currentDisplay, setCurrentDisplay] = useState(0)

  return (
    <div className="container">

      <div className="row">
        <div className="col-12 border">{currentDisplay}</div>
      </div>

      <div className="row">
        <div className="col-9 border">
          <div className="row">
            {topRow.map((item, index) => {
              return <div key={index} className="col-4 border">{item}</div>
            })}
            {numbers.map((item, index) => {
              return <div key={index} className="col-4 border">{item}</div>
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
