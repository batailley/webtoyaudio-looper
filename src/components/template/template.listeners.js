import { when } from 'k-ramel'
import { placeHolderReaction } from './template.reactions'

const listeners = [
  when('@@krf/ADD>TODOS')(placeHolderReaction)
]

export default listeners