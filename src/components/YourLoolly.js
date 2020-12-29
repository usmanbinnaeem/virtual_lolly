import React from "react"
import { navigate, Link } from "gatsby"
import Lolly from "../components/Lolly"
import Header from "./Header"

export const query = graphql`
  query MyQuery($yourLolly: String!) {
    Lollies {
      getLollypath(yourLolly: $yourLolly) {
        senderName
        message
        reciepentName
        flavourTop
        flavourMiddle
        flavourBottom
        yourLolly
      }
    }
  }
`
const YourLoolly = ({data}) => {
  return (
    <div className="container">
      <Header />
      <div className="lollyFormPage">
        <div>
          <Lolly
            fillLollyTop={data.Lollies.getLollypath.flavourTop}
            fillLollyMiddle={data.Lollies.getLollypath.flavourMiddle}
            fillLollyBottom={data.Lollies.getLollypath.flavourBottom}
          />
        </div>
        <div>
          <div className="YourLoollyLink">
            {" "}
            <h4>Your lolly is freezing. Share it with this link:</h4>
            <h3 className="link">{`https://v-lolly.netlify.app/lollies/${data.Lollies.getLollypath.yourLolly}`}</h3>
          </div>

          <div className="YourLoolly">
            <div className="resultCard">
              <strong className="reciepentName">{data.Lollies.getLollypath.reciepentName}</strong>
              <h4 className="message">{data.Lollies.getLollypath.message}</h4>
              <strong className="senderName">— {data.Lollies.getLollypath.senderName}</strong>
            </div>
          </div>
          <p className = "desc">
            {data.Lollies.getLollypath.senderName} {" "}
            made this virtual lollipop for you. You can<Link style = {{color: '#ffffff'}} to = '/createNewlolly'> make your own </Link> to send to
            a friend who deserve some sugary treat which won't rot their
            teeth...
          </p>
        </div>
      </div>
    </div>
  )
}

export default YourLoolly
