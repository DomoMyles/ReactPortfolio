import React from 'react';
import ReactDom from 'react-dom';
import App from './App'
import './style.css'
import { BrowserRouter } from "react-router-dom"


ReactDOM.render(<App />, document.getElementById('root'));

// const root = ReactDom.createRoot(document.getElementById('root'))
// root.render(
//     <React.StrictMode>
//         <BrowserRouter>
//             <App />
//         </BrowserRouter >
//     </React.StrictMode>

// )