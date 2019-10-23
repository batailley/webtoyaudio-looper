import { when } from 'k-ramel'
import { placeHolderReaction } from './row.reactions'

const listeners = [
  when('@@krf/ADD>TODOS')(placeHolderReaction)
]

export default listeners