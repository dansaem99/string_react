// 저 파일을 가져온거다
import './2.style.css'

const user = {
    username: 'heday',
    faceImgUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    faceImgSize: 90
}

export default function Main() {
    return (
        //객체를 리턴해준다.
        //객체 하나만 리턴한다.
        // return안에 문법은 jsx이다.
        // 노랑색은 javascript 객체이고 파랑색이 jsx코드에서 javascript쓸때
        // class는 classname으로 적어야한다.!!!
        <> {/*fragment(조각)이라고 부른다. jsx는 이런 주석이다. */}
            <h1>{user.username}</h1>
            <img className='avatar' //class가 아닌 className 으로 적어야 한다.
                src={user.faceImgUrl}
                style={{
                    width: user.faceImgSize,
                    height: user.faceImgSize
                }}/>
        </>
    )
}

//fragment 조각이라는 의미로 여러개의 객체를 모아서 하나의 덩어리로 만든다.
//return 안에 쓰는 코드는 jsx이다. 이 안에서 javascript 코드를 쓰려면 {}를 써주어야 한다.