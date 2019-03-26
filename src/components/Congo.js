import React from "react"

import Cardinfo from "./CardInfo"

import "./Congo.css"

const Congo = () => {
  const tabInfos = [
    {
      index: 0,
      ville: "Congo",
      image: "https://s1.dmcdn.net/Kou7Z/x1080-fbn.jpg"
    },
    {
      index: 1,
      ville: "Paris",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Paris_-_Eiffelturm_und_Marsfeld2.jpg/280px-Paris_-_Eiffelturm_und_Marsfeld2.jpg"
    }
  ]
  return (
    <div className="container">
      {tabInfos.map(info => {
        return (
          <div key={info.index}>
            <Cardinfo info={info} />
          </div>
        )
      })}
    </div>
  )
}

export default Congo
