import React from "react"

import "./Congo.css"

const Cardinfo = props => {
  console.log(props.info.ville)
  return (
    <div>
      {props.info.ville}
      <img src={props.info.image} alt={props.info.ville} />
    </div>
  )
}

export default Cardinfo
