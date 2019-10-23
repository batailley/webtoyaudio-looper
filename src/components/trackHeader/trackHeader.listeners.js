import { when } from 'k-ramel'
import { placeHolderReaction } from './trackHeader.reactions'

const listeners = [
  when('@@krf/ADD>TODOS')(placeHolderReaction)
]

export default listeners