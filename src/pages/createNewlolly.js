import { gql, useMutation } from "@apollo/client"
import React, { useRef, useState } from "react"
import { navigate } from "gatsby"
import Header from "../components/Header"
import Lolly from "../components/Lolly"
import shortid from "shortid"

const createlollyMutation = gql`
  mutation createLolly(
    $senderName: String!
    $message: String!
    $reciepentName: String!
    $flavourTop: String!
    $flavourMiddle: String!
    $flavourBottom: String!
    $yourLolly: String!
  ) {
    createLolly(
      senderName: $senderName
      message: $message
      reciepentName: $reciepentName
      flavourTop: $flavourTop
      flavourMiddle: $flavourMiddle
      flavourBottom: $flavourBottom
      yourLolly: $yourLolly
    ) {
      senderName
      message
      reciepentName
      yourLolly
    }
  }
`

export default function CreateNewlolly() {
  const [color1, setColor1] = useState("#d52358")
  const [color2, setColor2] = useState("#deaa43")
  const [color3, setColor3] = useState("#e95946")
  const recepientNameRef = useRef()
  const messageRef = useRef()
  const senderNameRef = useRef()

  const [createLolly] = useMutation(createlollyMutation)
 
  const onSubmit = async () => {
    const id = shortid.generate()
    console.log("clicked")
    console.log("color 1", color1)
    console.log("sender", senderNameRef.current.value)
    // const id = shortid.generate()
    const submitForm() = async () => { 
    const result = await createLolly({
      variables: {
        senderName: senderNameRef.current.value,
        message: messageRef.current.value,
        reciepentName: recepientNameRef.current.value,
        flavourTop: color1,
        flavourMiddle: color2,
        flavourBottom: color3,
        yourLolly: id,
      },
    })
    }
    submitForm()
    navigate(`/lollies/${id}`)
  }

  return (
    <div className="container">
      <Header />
      <div className="lollyFormPage">
        <div>
          <Lolly
            fillLollyTop={color1}
            fillLollyBottom={color3}
            fillLollyMiddle={color2}
          />
        </div>

        <div className="lollyFlavour">
          <label htmlFor="flavourTop" className="colorPickerLabel">
            {" "}
            <input
              type="color"
              value={color1}
              className="colorPicker"
              name="flavourTop"
              id="flavourTop"
              onChange={e => {
                setColor1(e.target.value)
              }}
            />
          </label>
          <label htmlFor="flavourTop" className="colorPickerLabel">
            <input
              type="color"
              value={color2}
              className="colorPicker"
              name="flavourMiddle"
              id="flavourMiddle"
              onChange={e => {
                setColor2(e.target.value)
              }}
            />
          </label>
          <label htmlFor="flavourTop" className="colorPickerLabel">
            <input
              type="color"
              value={color3}
              className="colorPicker"
              name="flavourBottom"
              id="flavourBottom"
              onChange={e => {
                setColor3(e.target.value)
              }}
            />
          </label>
        </div>
        <div className="inputFields">
          <div className="lollyforms">
            <label htmlFor="reciepentName">To</label>
            <input
              type="text"
              name="reciepentName"
              id="reciepentName"
              ref={recepientNameRef}
            />

            <label htmlFor="message">Message</label>
            <textarea rows="15" cols="45" ref={messageRef} />

            <label htmlFor="reciepentName">From</label>
            <input
              type="text"
              name="senderName"
              id="senderName"
              ref={senderNameRef}
            />
          </div>
          <input
            className="createButton"
            type="button"
            value="create lolly"
            onClick={onSubmit}
          />
        </div>
      </div>
    </div>
  )
}
