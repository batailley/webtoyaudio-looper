import { createStore, types } from 'k-ramel'

const store = createStore({
  todos: types.keyValue(),
  config: types.object(),
  playing: {
    currentTick: types.number(),
    currentPatternId: types.number(),
  },
  patterns: types.keyValue(),
})

const options = {
  bpm: 120,
  barLength: 4,
  barsPerRow: 4,
  rowsPerPattern: 6,
  soundsSrc: [
      './sounds/bd04.wav',
      './sounds/hh04.wav',
      './sounds/sd04.wav',
      './sounds/cp02.wav',
      './sounds/hh01.wav',
      './sounds/hh02.wav',
      './sounds/oh02.wav',
  ]
}
store.config.set(options)

export default store