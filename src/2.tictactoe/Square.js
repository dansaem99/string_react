//default로 사용이 안될때는 {}를 사용해야한다.
import {useState} from 'react'

export default function Square({value, onClick}) {
    return (
        <button className='square'
                onClick={onClick}>
            {value}
        </button>
    )
}