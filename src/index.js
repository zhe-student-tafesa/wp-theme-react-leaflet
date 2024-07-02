import './styles/main.scss'
import Person from './scripts/Person'
import ExampleReactComponent from './scripts/ExampleReactComponent'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './scripts/App'

const person1 = new Person("Brad")
ReactDOM.render(<App />, document.querySelector("#render-react-example-here"))