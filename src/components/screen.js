import React, {useContext} from 'react';
import useFitText from 'use-fit-text';
import { DataContext } from '../context/dataContext';


const Screen = () => {

    const {calcData} = useContext(DataContext)



    const { fontSize, ref } = useFitText({maxFontSize:250});

    return(
        <div className="screen">
            <span ref={ref} style={{ fontSize, height: 110, width: 280, }} className="textScreen">
                {calcData.num ? calcData.num : calcData.res}
            </span>
        </div>
    )
}

export default Screen;