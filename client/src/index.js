import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'
import './styl/main.styl'

var root = document.getElementById('root')

document.body.addEventListener('scroll', function(e) {
    console.log(e)
    e.stopPropagation()
})

document.documentElement.addEventListener('scroll', function(e) {
    console.log(e)
    e.stopPropagation()
})

root.scroll="no"

root.addEventListener('scroll', function(e) {
    console.log(e)
    e.stopPropagation()
})

ReactDOM.render(<App />, root);
