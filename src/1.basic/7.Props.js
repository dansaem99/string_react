import {useState} from 'react'

//parmeter는 property이고 속성이다.
//남한테 받는 데이터 여기서 남은 부모인 main이다.
function Button({count, onClick}) {
    return <button onClick={onClick}>{count} times</button>
}

export default function Main() {
    // 내가 소유하고 있는 데이터
    const [count, setCount] = useState(0)

    function onClick() {
        setCount(count + 1)
    }
    //여기서 버튼을 콜하기때문에!
    return (
        <>
            <Button count={count} onClick={onClick}/>
            <Button count={count} onClick={onClick}/>
        </>
    )
}