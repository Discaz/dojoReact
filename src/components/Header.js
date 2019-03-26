import React from "react"

import logo from "../logo.svg"
import "./Header.css"

const Header = ({ prix, sentiment }) => {
  console.log(prix[1], sentiment)
  return (
    <>
      <div>Hello le poulet(le flic)</div>
      <header className="Header-header">
        <img src={logo} className="Header-logo" alt="logo" />
        <p>
          J'ai eu une amende de {prix[2]}
          {/* {prix.map(tarif => {
            return (
              <div className="red">
                yolo
                <br />
                {tarif * 2}
              </div>
            )
          })} */}{" "}
          euros et j'ai le {sentiment}.
        </p>
        <a
          className="Header-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </>
  )
}

export default Header
