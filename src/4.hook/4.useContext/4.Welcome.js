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
    const currentUser = useContext(CurrentUserContext)

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

function 