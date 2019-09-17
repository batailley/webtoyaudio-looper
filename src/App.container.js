import { provider } from '@k-ramel/react'
import store from './store';
import Main from './Main'

export default provider(store)(Main)
