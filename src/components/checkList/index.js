import React, { useState, useCallback } from 'react';
import Task from './task/'

import './style.css'

const todoItems = [
    {
        id: 0,
        text: 'React'
    },
    {
        id: 1,
        text: 'JS'
    },
    {
        id: 2,
        text: 'CSS'
    },
    {
        id: 3,
        text: 'REDUX'
    },

]
const CheckList = ({ title }) => {
    // const [progres, setProgres] = useState(0);
    const [trues, setTrues] = useState(0);


    const onClickTask = useCallback(
        (val) => {
            console.log(val);

            if (val) {
                setTrues(() => trues + 1)
                console.log(trues);

            } else {
                setTrues(() => trues - 1)
                console.log(trues);

            }
        },
        [setTrues, trues],
    )
    const value = trues / todoItems.length * 100;
    return (
        <div className='checklist'>
            <h1>{title}</h1>

            <div className="loadbar">
                <div className="progress" style={{ width: value + '%' }}>

                </div>
            </div>
            <div className="tasks">
                {todoItems.map(item => {
                    return <Task key={item.id} text={item.text} onPress={onClickTask} />
                })}
            </div>
        </div>
    )
}
export default CheckList;