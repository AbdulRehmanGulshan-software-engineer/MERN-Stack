import { createRoot } from 'react-dom/client'
import './style.css'
import React, { Children } from 'react';

const root = createRoot(document.getElementById('root'))


// root.render(card)
// root.render([card,card])
//instead create a container


function Card(props) {
    // console.log(cardDetails);
    // const { key,title, images, price } = props;
    const { title, images, price } = props;
    // console.log(key);
    return (
        // <div className='card' key={key}>
        <div className='card'>
            <img src={images} alt="iphone" />
            <div className="card-content">
                <h3>{title}</h3>
                <p>Apple</p>
                <p><b>{price}</b></p>
            </div>

        </div>
    )
}
// console.log(Card())
// const container = [
//     Card(1),
//     Card(2),
//     Card(3),
//     Card(4),
//     Card(5)
// ]
// root.render(<div className='container'>{container}</div>)



function Card2() {
    return (
        <h1>Hello Big Gamez PUCIT</h1>
    )
}

//fetching data
fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        const container2 = data.products.map((product) => {
            return (
                <Card
                    title={product.title}
                    images={product.thumbnail}
                    price={product.price}
                    key={product.id}
                />
            )
        })
        root.render(<div className='container'>{container2}</div>)

    })
    .catch(error => {
        console.log("Error: ", error);
    });


// //learning new concept 👇
// root.render({
//     $$typeof : Symbol.for('react.element'),
//     // type : 'gulshan',       //even we can pass a function as type
//     // type: Card2,
//     type: Card,
//     ref : null,
//     props : {
//         // children:'Hello World'
//         title : 'iphone',
//         images: 'https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp',
//         price: 2000,
//         key: 1
//     }
// })
// //instead of passing react element like this we can use react.createElement
// const h1 = <h1>Hello World</h1>
// console.log(h1);


// 💭 react component is react element whose type is function(which return jsx).

// root.render(React.createElement(Card,
//     {
//         title: 'iphone',
//         images: 'https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp',
//         price: 2000,
//         key: 1,
//     })
// )

// root.render(
//     <Card
//         title="iPhone 13"
//         images="https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp
//     " price="899"
//     />
// )

// console.log(  <Card
//         title="iPhone 13"
//         images="https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp
//     " price="899"
//     />)