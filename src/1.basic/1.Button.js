import React from 'react'
// button modiles

//통일성있게 Main으로 바꿈
export default function Main() {
    /*
    return (
        //소문자로 적어 html이구 알수있다.
        <button> I'm a button. </button>
    ) 아래는 javascript로 바꿔준거!
    */
   return React.createElement('button', null, 'I\'m a button')
}

//앱이 실행이 안되면 ctrl + c 누르고
//npm cache verify를 terminal에 적으면
//기존에 있던게 삭제되면 다시 npm start를 해서 앱을 실행한다.