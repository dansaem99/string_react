export default function Main() {
    function onClick() {
        alert('you clicked me.')
    }
    //{}아니 function
    return <button onClick={onClick}>click me</button>
}