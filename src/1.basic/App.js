//.js는 생략가능
//import Main from './1.Button.js'
//import Main from './2.Style'
//import Main from './3.Condition'
//import Main from './4.List'
//import Main from './5.Event'
//import Main from './6.State'
//import Main from './7.Props'
import Main from './8.Main'

export default function App() {
    return (
        /* call하는 문법이다.
         대문자로 시작해 component를 알수있다.
         xml태그다. javascript로 바뀌기때문에 자바스크립트가 실행된다.
        jsx라고부른다. JavaScript xml이다. */
        <Main/>
    )
}

//App부모, 1.button은 자식 component가 2개이다.
/*
react는
기존에 있는 component를 다 버리고 새로운 component를 만든다.
react dom이 있고 브라우저 dom를 있다.
react dom에서 지우고 새로 만들면 브라우저 dom은 새로 만들거 받고
보여주는거다.
*/