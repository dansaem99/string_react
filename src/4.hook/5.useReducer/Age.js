import {useReducer} from 'react'

export default function Age() {
    const [state, dispatch] = useReducer(reducer, {age: 22})

    return (
        <>
            <button onClick={() => dispatch({type: 'plugAge'})}>
                plus age
            </button>
            <p>you are {state.age}</p>
        </>
    )
}

function reducer(state, action) {
    if(action.type === 'plugAge')
        return {age: state.age + 1}
    throw Error('unknown state')
}