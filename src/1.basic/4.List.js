const foods = [
    {foodName: 'cabbage', isFruit: false, foodId: 1},
    {foodName: 'garlic', isFruit: false, foodId: 2},
    {foodName: 'apple', isFruit: true, foodId: 3}
]

// key는 객체의 아이디값 userId가 key로 쓰기 좋다
export default function Main() {
    const items = foods.map(food => 
        //key를 안쓰면 warning 이 뜬다. key는 가급적 유일한 것, id를 쓴다.
        <li key={food.foodId}
            style={{
                color: food.isFruit ? 'magenta' : 'darkgreen'
            }}>
            {food.foodName}
        </li>
    )
            //li의 객체인 items를 적는게 편하다
    return <ul>{items}</ul>
}