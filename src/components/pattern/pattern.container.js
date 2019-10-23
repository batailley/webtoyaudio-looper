import React from 'react'
import store from '../../store'
import { provider, inject, listen } from '@k-ramel/react'
import Template from './pattern.jsx/index.js'
import listeners from './pattern.listeners'

const TodoContainer = inject((store) => {
  return {
    todos: store.todos.getAsArray(),
    onClick: () => (
      store.todos.add({ id: Math.random(), title: 'Yo! I am a new todo!' })
    ),
  }
})(Template)

const App = () => (<TodoContainer />)
const AppContainer = listen(listeners)(App)
export default provider(store)(AppContainer)