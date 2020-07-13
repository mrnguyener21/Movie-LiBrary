import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { testOne } from './action'


const App = () => {
    const dispatch = useDispatch();
    const test = useSelector((state) => state.test);
    return (
        <div>
            <button onClick={ () => dispatch(testOne()) }>test</button>
            <h1> { test }</h1>
        </div>
    )
}

export default App;
