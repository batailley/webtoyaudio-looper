import React from 'react'
import Bob from './bob'

const Row = ({ row, totalTickLength }) => {
  const ticks = [];

  for (let i = 1; i <= totalTickLength; i++) {
      ticks.push(
          <Bob playing={i === currentTick}
              first={(i - 1) % this.options.barLength === 0}
              tick={i}
              key={i}
              currentTick={currentTick}
              playSound={this.playSound.bind(this)}
              rowId={row.id}
          > </Bob>
      )
  }

  return ticks;
}

export default Row