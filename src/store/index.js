import { createStore, types } from 'k-ramel'
import listeners from '../listeners'

export default createStore(
  {
    data: {
      todos: types.keyValue(), // or you can create it this way if you want to serialize it : { type: 'keyValue' }
    },
    ui: {
      views: {
        all: types.array(),
        completed: types.array(),
        active: types.array(),
      },
    },
  },
  {
    listeners,
  },
)