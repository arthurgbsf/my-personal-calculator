import React, {useContext} from 'react';
import { DataContext } from '../context/dataContext';

const Button = ({value, btnClass}) => {

// get the provider value of the context
    const {calcData, setCalcData} = useContext(DataContext)

//set a number
    const setNumber = () => {

        const stringValue = value.toString()
        let numberValue = undefined;

        if (stringValue === '0' && calcData.num === 0) {
            numberValue = "0"
        } else {
            numberValue = Number(calcData.num + stringValue)
        }
        
        setCalcData({
            ...calcData,
            num: numberValue
        })
    }
//set comma to a number 
    const commaFunc = () => {
      setCalcData({
        ...calcData,
        num: !calcData.num.toString().includes('.') ? calcData.num +value : calcData.num
      });
    }
// set operators function
  const operatorFunc = () => {
    setCalcData({
      sign: value,
      res: !calcData.res && calcData.num ? calcData.num : calcData.res,
      num: 0
    })
}
//active the clear function
    const clearFunc = () => {
        setCalcData({ sign: '', num: 0, res: 0 })
    }
// active percentage function
    const percentFunc = () => {
        setCalcData({
        num: (calcData.num / 100),
        res: (calcData.res / 100),
        sign: ''
        })
    }
//active inverter sinal function
  const invertSinalFunc = () => {
    setCalcData({
      num: calcData.num ? calcData.num * -1 : 0,
      res: calcData.res ? calcData.res * -1 : 0,
      sign: ''
    })
  }
// active equal function
  const equalFunc = () => {
    if(calcData.res && calcData.num) {

      const equation = (a, b, sign) => {
        const result = {
          '+': (a, b) => a + b,
          '-': (a, b) => a - b,
          'x': (a, b) => a * b,
          '/': (a, b) => a / b,
        }
        return result[sign](a, b);
      }

      setCalcData({
        res: equation(calcData.res, calcData.num, calcData.sign),
        sign: '',
        num: 0
      })
    }
  }
//directs to the corresponding button function
    const inputFunctions = () => {
        
      const btnFunctions = {
          '.': commaFunc,
          'C': clearFunc,
          '/': operatorFunc,
          'x': operatorFunc,
          '-': operatorFunc,
          '+': operatorFunc,
          '=': equalFunc,
          '%': percentFunc,
          '+-': invertSinalFunc
        }

        if(btnFunctions[value]) {
          return btnFunctions[value]()
        } else {
          return setNumber()
        }
      }
      
    return(
    <button onClick={()=>{inputFunctions()}} className={`button ${btnClass}`}>
        <p>{value}</p>
    </button>
    )
}

export default Button;