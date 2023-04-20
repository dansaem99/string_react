import user from './8.user'

export default function UserPanel() {
    user.sayHello()

    return (
        <>
            <p>name: {user.username}</p>
            <p>age: {user.age}</p>
            {user.sayHello()}
        </>
    )
}