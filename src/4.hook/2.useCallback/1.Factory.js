import React, {useState,useCallback} from 'react'

export default function Factory() {
    const [carCnt, setCarCnt] = useState(0)
    const [shipCnt, setShipCnt] = useState(0)

    const makeCar = () => setCarCnt(carCnt + 1)
    const makeShip = useCallback(() => setShipCnt(shipCnt + 1), [shipCnt])

    return (
        <>
            <Car make={makeCar}/>{' '}
            <Ship make={makeShip}/>
        </>
    )
}

//프라퍼티가 안바뀌었으면 캐시 된것을 사용하고 프라퍼티가 바뀌었으면
//새로운 컨퍼넌트를 사용하겠다.
const Car = React.memo(function({make}) {
    console.log('car')
    return <button onClick={make}>car</button>
})

const Ship = React.memo(function({make}) {
    console.log('ship')
    return <button onClick={make}>ship</button>
})