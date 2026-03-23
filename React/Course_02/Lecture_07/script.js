import { user } from "./data.js";
import ReactDOM from 'react-dom';
import {createRoot} from 'react-dom/client'

console.log("Hello World");
const h1 = <h1>Hello Big Gamez PUCIT</h1>;
const root = createRoot(document.getElementById('root'))
root.render(h1)


// hot module replacement
if (module.hot) {
    module.hot.accept();
}