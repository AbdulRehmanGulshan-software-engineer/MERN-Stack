function Header(props) {
    return (
        <h1>Hi {props.name} Welcome To Pakistan Election Commission</h1>
    )
}
function Main({ user }) {
    return (
        <>
            <h2>Hi {user.name}</h2>
            <h2>We have this is information about You</h2>
            <ul>
                <li>{user.age}</li>
                <li>{user.city}</li>
            </ul>
        </>
    )
}

function Footer() {
    return (
        <h3>Thanks For Visiting Our Website.</h3>
    )
}

function App() {
    return (
        //calling header function
        //return in single root ,,, i used div here
        // dont make extra root dispatchEvent,instead use fragment <></>
        <>
            <Header name={"Gulshan"}></Header>
            <Main user={{ name: "Rohit", age: 30, city: "Lahore" }} course="React"></Main>
            <Footer></Footer>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);