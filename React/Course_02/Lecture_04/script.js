// const h2 = React.createElement('h2', { className: "heading" }, "Hello I am child node.");

// // create root
// const root = ReactDOM.createRoot(document.querySelector("#root"));
// root.render(h2)


const container = React.createElement('div', { className: 'container', id: 'container' }, [
    React.createElement('section', { key: 1 }, [
        React.createElement('p', { key: 1 }, 'The Library for web and native user interfaces'), React.createElement('img', { key: 2, src: 'https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350' })
    ])
])

ReactDOM.createRoot(document.querySelector("#root")).render(container);