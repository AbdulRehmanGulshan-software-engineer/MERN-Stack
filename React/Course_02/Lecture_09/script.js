import { createRoot } from 'react-dom/client'
import './style.css'

const root = createRoot(document.getElementById('root'))


// root.render(card)
// root.render([card,card])
//instead create a container


function Card(key,title,images,price) {
    return (
        <div className='card' key={key}>
            <img src={images} alt="iphone" />
            <div className="card-content">
                <h3>{title}</h3>
                <p>Apple</p>
                <p><b>{price}</b></p>
            </div>

        </div>
    )
}
console.log(Card())
// const container = [
//     Card(1),
//     Card(2),
//     Card(3),
//     Card(4),
//     Card(5)
// ]
// root.render(<div className='container'>{container}</div>)


//fetching data
fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        const container2 = data.products.map((product) => {
            return Card(product.id,product.title,product.images,product.price)
        })
        root.render(<div className='container'>{container2}</div>)

    })
    .catch(error => {
        console.log("Error: ", error);
    });

