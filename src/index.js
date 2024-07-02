import './styles/main.scss'
import Person from './scripts/Person'

import React from 'react'
import ReactDOM from 'react-dom'
import App from './scripts/App'
import "bootstrap/dist/css/bootstrap.css";

const person1 = new Person("Brad")
ReactDOM.render(<App />, document.querySelector("#render-react-example-here"))