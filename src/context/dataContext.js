import React, {createContext, useState} from 'react';

export const DataContext = createContext();

const DataProvider =({children}) => {

    const [calcData, setCalcData] = useState({
        sign: "",
        num: 0,
        res: 0
      });
    
      const providerValue = {
        calcData, setCalcData
      }

    
    return (
        <DataContext.Provider value={providerValue}>
            {children}
        </DataContext.Provider>
    );
}

export default DataProvider;