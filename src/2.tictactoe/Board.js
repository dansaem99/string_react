import Square from "./Square"
import {useState} from 'react'

export default function Board() {
    //squares => 상수
    const [squares, setSquares] = useState(Array(9).fill(null))
    const [xIsNext, setXIsNext] = useState(true)

    function onClick(i) {
        if(pickWinner(squares) || squares[i]) return

        //slice()는 재생성
        const nextSquares = squares.slice()
        xIsNext ? nextSquares[i] = 'X' : nextSquares[i] = 'O'
        setSquares(nextSquares)
        setXIsNext(!xIsNext)
    }

    function pickWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]

        let winner
        for(let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i]
            if(squares[a] && (squares[a] === squares[b]) && (squares[a] === squares[c]))
                winner = squares[a]
        }

        return winner
    }

    return (
        <>
            <div className='board-row'>
                <Square value={squares[0]} onClick={() => onClick(0)}/>
                <Square value={squares[1]} onClick={() => onClick(1)}/>
                <Square value={squares[2]} onClick={() => onClick(2)}/>
            </div>
            <div className='board-row'>
                <Square value={squares[3]} onClick={() => onClick(3)}/>
                <Square value={squares[4]} onClick={() => onClick(4)}/>
                <Square value={squares[5]} onClick={() => onClick(5)}/>
            </div>
            <div>
                <Square value={squares[6]} onClick={() => onClick(6)}/>
                <Square value={squares[7]} onClick={() => onClick(7)}/>
                <Square value={squares[8]} onClick={() => onClick(8)}/>
            </div>
        </>
    )
}