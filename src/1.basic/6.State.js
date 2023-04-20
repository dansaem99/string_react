import {useState} from 'react'
// [] => 배열 / 원소는 2개 첫번째원소는 count 두번째원소는 setCount
// 구조분해할당
// 클릭하면 1씩 증가한다.
export default function Main() {
    //const는 상수이다.
    const [count, setCount] = useState(0)

    function onClick() {
        setCount(count + 1)
    }

    return <button onClick={onClick}>{count}</button>
}

//hook이라고한다.
//시간이 따라서 바뀌는 데이터