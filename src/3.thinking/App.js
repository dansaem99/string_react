import {useState} from 'react'

//SearchBar()와 ProductTable의 부모이다.
//
function FilterableProductTable({products}) {
    const [filterText, setFilterText] = useState('')
    const [inStockOnly, setInStockOnly] = useState(false)

    return (
        <>
            <SearchBar
                filterText={filterText}
                inStockOnly={inStockOnly}
                setFilterText={setFilterText}
                setInStockOnly={setInStockOnly}/>
            <ProductTable products={products}
                filterText={filterText}
                inStockOnly={inStockOnly}/>
        </>
    )
}

function SearchBar({filterText, inStockOnly, setFilterText, setInStockOnly}) {
    return (
        <form>
            <input type='text'
                placeholder='search...'
                value={filterText}
                onChange={e => setFilterText(e.target.value)}/><br/>
            <label>
                <input type='checkbox'
                checked={inStockOnly}
                onChange={e => setInStockOnly(e.target.checked)}/>{' '}
                only show products in stock
            </label>
        </form>
    )
}

function ProductTable({products, filterText, inStockOnly}) {
    const rows = []
    let lastCategory = null

    products.forEach(product => {
        if(product.productName.toLowerCase().indexOf(
            filterText.toLowerCase()) === -1) return
        if(inStockOnly && !product.stocked) return

        if(product.category !== lastCategory) {
            rows.push(
                <ProductCategoryRow
                    category={product.category}
                    key={product.category}/>
            )
        }
        rows.push(
            <ProductRow
                product={product}
                key={product.productName}/>
        )

        lastCategory = product.category
    })

    return (
        <table>
            <thead>
                <tr><th>name</th><th>price</th></tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    )
}

function ProductCategoryRow({category}) {
    return (
        <tr><th colSpan='2'>{category}</th></tr>
    )
}

function ProductRow({product}) {
    const productName = product.stocked ? product.productName :
        <span style={{color: 'red'}}>{product.productName}</span>
    
    return (
        <tr>
            <td>{productName}</td>
            <td>{product.price}</td>
        </tr>
    )
}

const products = [
    {category: 'fruits', price: 1000, stocked: true, productName: 'apple'},
    {category: 'fruits', price: 1000, stocked: true, productName: 'dragonfruit'},
    {category: 'fruits', price: 2000, stocked: false, productName: 'passionfruit'},
    {category: 'vegetable', price: 2000, stocked: true, productName: 'spinach'},
    {category: 'vegetable', price: 4000, stocked: false, productName: 'pumpkin'},
    {category: 'vegetable', price: 1000, stocked: true, productName: 'pea'},
]

export default function App() {
    return <FilterableProductTable products={products}/>
}