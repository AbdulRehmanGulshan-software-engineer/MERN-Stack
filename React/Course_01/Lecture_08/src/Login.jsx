import { useRef, useState } from "react";

function Login() {
    // const [email,setEmail] = useState("");
    // const [password,setPassword] = useState("");
    const emailRef = useRef(null);
    const passRef = useRef(null);

    console.log("render");

    function handleSubmit(e) {
        e.preventDefault();

        // console.log(email);
        console.log(emailRef.current.value);
        // console.log(password);
        console.log(passRef.current.value);
    }

    return(
        <>
        <form onClick={handleSubmit}>
            {/* <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}></input> */}
            <input type="email"  ref={emailRef}></input>
            {/* <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}></input> */}
            <input type="password"  ref={passRef}></input>
            <button type="submit">Submit</button>
        </form>
        </>
    )
}

export default Login;
