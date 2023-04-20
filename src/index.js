//index.js는 src폴더안에 꼭 넣어줘야한다.
import ReactDOM from 'react-dom/client'
//import App from './1.basic/App'
//import App from './2.tictactoe/App'
//import App from './3.thinking/App'
import App from './4.hook/App'

ReactDOM.createRoot(
    document.getElementById('root')
).render(<App/>)