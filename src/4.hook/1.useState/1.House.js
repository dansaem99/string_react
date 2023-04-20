import {useState} from 'react'

export default function Main() {
    console.log('house')
    return (
        <>
            <LivingRoom/>{' '}
            <RestRoom/> {' '}
            <BedRoom/>
        </>
    )
}

function LivingRoom() {
    console.log('livingRoom')
    const [isLight, setIsLight] = useState(false)
    let roomName = '거실 '
    if(isLight) roomName += 'O'

    return <button onClick={() => setIsLight(!isLight)}>{roomName}</button>
}

function RestRoom() {
    console.log('restRoom')
    const [isLight, setIsLight] = useState(false)
    let roomName = '화장실'
    if(isLight) roomName += 'O'

    return <button onClick={() => setIsLight(!isLight)}>{roomName}</button>
}

function BedRoom() {
    console.log('bedRoom')
    const [isLight, setIsLight] = useState(false)
    let roomName = '침실'
    if(isLight) roomName += 'O'

    return <button onClick={() => setIsLight(!isLight)}>{roomName}</button>
}