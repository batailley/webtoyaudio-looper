import React from 'react';
import Row from './../row'

const Pattern = ({ rows }) => (
  rows.map(row => (
    <div className={"row"} key={row.id}>
    <div className={"row-header"}>
        <span className="row-number">{row.id}</span>
        <span>{row.soundSrc}</span>
    </div>
    <div className={"row-content"}>
        <Row {...row} />
    </div>
  </div>
  ))
)

export default Pattern