import React, {useState} from 'react'

export default function Factory() {
    console.log('factory')
    const [carCnt, setCarCnt] = useState(0)
    const [shipCnt, setShipCnt] = useState(0)

    return (
        <>
            <button onClick={() => setCarCnt(carCnt + 1)}>car</button>
            <button onClick={() => setShipCnt(shipCnt + 1)}>car</button>
            <hr/>
            <Car cnt={carCnt}/>
            <Ship cnt={shipCnt}/>
        </>
    )
}

function Car({cnt}) {
    console.log('car')
    return `car: ${cnt}`   
}

const Ship = React.memo(function({cnt}) {
    console.log('ship')
    return `ship: ${cnt}`
})