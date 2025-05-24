import React, { useReducer } from 'react'

const ACTIONS = {
    INCREMENT: 'increment',
    DECREMENT: 'decrement'
}

function reducerFn(state, action) {

    switch(action.type){
        case ACTIONS.INCREMENT:
            return {count: state.count+ 1}
        case ACTIONS.DECREMENT:
            return {count: state.count- 1}
        default:
            return state
    }
}


const ReducerUser = () => {

    const [state, dispatch] = useReducer(reducerFn, {count: 1})

    function increment(){
        dispatch({type: ACTIONS.INCREMENT})
    }

    function decrement(){
        dispatch({type: ACTIONS.DECREMENT})
    }
  return (
    <div style={{display: 'flex', alignItems: 'center'}}>
        <button onClick={decrement}>-</button>
        <h4>{state.count}</h4>
        <button onClick={increment}>+</button>
    </div>
  )
}

export default ReducerUser