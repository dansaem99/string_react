import { createContext, useContext, useState } from "react"
import './3.style.css'

const CurrentUserContext = createContext(null)
export default function Welcome() {
    const [currentUser, setCurrentUser] = useState(null)

    //노란색: 자바스크립트 코드 
    //분홍색: 자바스크립트 오브젝 
    return (
        <CurrentUserContext.Provider value={{
            currentUser,
            setCurrentUser
        }}>
            <Form/>
        </CurrentUserContext.Provider>
    )
}

function Form() {
    return (
        <Panel title='welcome'>
            <Login/>
        </Panel>
    )
}

function Panel({title, children}) {
    return (
        <section className="panel">
            <h1>{title}</h1>
            {children}
        </section>
    )
}

//컴포넌트를 만들어 내는 펑션이며 리턴 하는 것이 컴포넌트이다.
function Login() {
    const {currentUser, setCurrentUser} = useContext(CurrentUserContext)

    let element
    if(!currentUser) element = 
        <Button onClick={() => setCurrentUser({username: 'advika'})}>login</Button>
    else element = <p>you logged in as {currentUser.username}.</p>

    return element
}

function Button({onClick, children}) {
    return (
        <button className='button' onClick={onClick}>
            {children}
        </button>
    )
}