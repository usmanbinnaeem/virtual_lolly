import React from "react"
import { navigate } from "gatsby"
import Lolly from "../components/Lolly"
import Header from "../components/Header"

export default function Home() {
  return (
    <div className="container">
      <div>
        <Header />
      </div>
      <div className="lollies">
        <div>
          <Lolly
            fillLollyTop="#d52358"
            fillLollyBottom="#deaa43"
            fillLollyMiddle="#e95946"
          />
        </div>
        <div>
          <Lolly
            fillLollyTop="#e8e8e8"
            fillLollyBottom="#f05454"
            fillLollyMiddle="#30475e"
          />
        </div>
        <div>
          <Lolly
            fillLollyTop="#cae4db"
            fillLollyBottom="#cdac81"
            fillLollyMiddle="#00303f"
          />
        </div>
        <div>
          <Lolly
            fillLollyTop="#f3bad6"
            fillLollyBottom="#ea86b6"
            fillLollyMiddle="#e05297"
          />
        </div>
        <div>
          <Lolly
            fillLollyTop="#ffe5b9"
            fillLollyBottom="#eff8ff"
            fillLollyMiddle="#c9cbff"
          />
        </div>
      </div>
      <input
      style = {{margin: '35px'}}
        className="createButton"
        type="button"
        value="Make New lolly for your Friend"
        onClick={() => {
          navigate("/createNewlolly")
        }}
      />
    </div>
  )
}
