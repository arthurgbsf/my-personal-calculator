import React from 'react';
import Calculator from './components/calculator';
import Screen from './components/screen';
import Buttons from './components/buttons';
import Button from './components/button';
import DataProvider from './context/dataContext';


const App = () => {

  const buttonValues = {clear: "C", minusPlus: "+-", percent:"%",  divide: "/", seven:7, eight:8, nine:9,
  multiply: "x", four:4, five:5, six:6, minus:"-",
  one:1, two:2, thre:3,   plus:"+", zero:0,  doc:".", equal: "="};

  return(
    <DataProvider>
      <Calculator>
        <Screen/>
        <Buttons>
          {Object.keys(buttonValues).map((key) => {
            const btnValue = buttonValues[key];
            return (<Button value={btnValue} key={key} btnClass={key}/>);
            })
          }
        </Buttons>
      </Calculator>
    </DataProvider> 
  )
}


export default App;
