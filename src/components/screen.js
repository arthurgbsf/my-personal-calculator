import React, {useContext} from 'react';
import { Textfit } from 'react-textfit';
import { DataContext } from '../context/dataContext';


const Screen = () => {

    const {calcData} = useContext(DataContext)


    return(
        <div className="screen">
           <Textfit max={70}  mode="single" className="Screen">
                {calcData.num ? calcData.num : calcData.res}
            </Textfit>
        </div>
    )
}

export default Screen;