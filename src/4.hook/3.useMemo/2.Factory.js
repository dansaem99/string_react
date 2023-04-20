import {useState, useMemo} from 'react'

export default function Factory() {
    console.log('factory')

    const [carCnt, setCarCnt] = useState(0)
    const [shipCnt, setShipCnt] = useState(0)

    const makeCar = () => setCarCnt(carCnt + 1)
    const makeShip = () => setShipCnt(shipCnt + 1)

    let productCnt = useMemo(() => carCnt + shipCnt, [shipCnt])

    return (
        <>
            <h1>{productCnt}</h1>
            <hr/>
            <Car make={makeCar}/> {' '}
            <Ship make={makeShip}/>
        </>
    )
}

function Car({make}) {
    console.log('car')
    return <button onClick={make}>car</button>
}

function Ship({make}) {
    console.log('ship')
    return <button onClick={make}>ship</button>
}