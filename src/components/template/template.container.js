import React from 'react'
import store from '../../store'
import { provider, inject, listen } from '@k-ramel/react'
import Template from './template.jsx'
import listeners from './template.listeners'

const TodoContainer = inject((store) => {
  return {
    todos: store.config.get(),
    onClick: () => (
      store.todos.add({ id: Math.random(), title: 'Yo! I am a new todo!' })
    ),
  }
})(Template)

const App = () => (<TodoContainer />)
const AppContainer = listen(listeners)(App)
export default provider(store)(AppContainer)