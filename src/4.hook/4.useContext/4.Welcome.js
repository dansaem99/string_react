import { createContext, useContext, useState } from "react"
import './1.style.css'

const ThemeContext = createContext(null)
const CurrentUserContext = createContext(null)

export default function Welcome() {
    const [theme, setTheme] = useState('light')
    const [currentUser, setCurrentUser] = useState(null)

    return (
        <ThemeContext.Provider value={theme}>
            <CurrentUserContext.Provider value={{currentUser, setCurrentUser}}>
                <WelcomePanel/><br/>
                <label>
                    <input type='checkbox'
                        checked={theme === 'dark'}
                        onChange={e => setTheme(e.target.checked ? 'dark' : 'light')}/>
                        use dark mode
                </label>
            </CurrentUserContext.Provider>
        </ThemeContext.Provider>
    )
}

function WelcomePanel() {
    const {currentUser} = useContext(CurrentUserContext)

    return (
        <Panel title='welcome'>
            {currentUser ? <Greeting/> : <LoginForm/>}
        </Panel>
    )
}

function Panel({title, children}) {
    const theme = useContext(ThemeContext)
    const className = 'panel-' + theme

    return (
        <section className={className}>
            <h1>{title}</h1>
            {children}
        </section>
    )
}

function Greeting() {
    const {currentUser} = useContext(CurrentUserContext)
    return <p>you looged in as {currentUser.username}</p>
}

function LoginForm() {
    const {setCurrentUser} = useContext(CurrentUserContext)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const isVal = firstName && lastName

    return (
        <>
            <label>
                first name{': '}
                <input required
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}/>
            </label><br/>
            <label>
                last name{': '}
                <input required
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}/>
            </label><br/>
            <Button disabled={!isVal}
                onClick={() => setCurrentUser({
                    username: firstName + ' ' + lastName
                })}>
                    log in
            </Button>
        </>
    )
}

function Button({disabled, onClick, children}) {
    const theme = useContext(ThemeContext)
    const className = 'button-' + theme
    
    return (
        <button className={className}
            disabled={disabled}
            onClick={onClick}>
            {children}
        </button>
    )
}