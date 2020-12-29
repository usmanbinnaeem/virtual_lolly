// import React from "react"
// import Lolly from "../components/Lolly"
// import Header from "../components/Header"
// import { Link } from "gatsby"
// import { useQuery, gql } from "@apollo/client"

// const GET_LOLLY_BY_PATH = gql`
//   query lolly($yourLolly: String!) {
//     getLollypath(yourLolly: $yourLolly) {
//       senderName
//       message
//       reciepentName
//       flavourTop
//       flavourMiddle
//       flavourBottom
//       yourLolly
//     }
//   }
// `

// export default function NotFound({ location }) {
//   var queryLollies = location.pathname.slice(0, 9)
//   var queryPath = location.pathname.slice(9)

//   const { loading, error, data } = useQuery(GET_LOLLY_BY_PATH, {
//     variables: { yourLolly: queryPath },
//   })

//   return (
//     <div className="container">
//       {loading ? (
//         <div className="loading">Loading...</div>
//       ) : !!data && queryLollies === "/lollies/" ? (
//         <div>
//           <Header />
//           <div className="lollyFormPage">
//             <div>
//               <Lolly
//                 fillLollyTop={data.getLollypath.flavourTop}
//                 fillLollyMiddle={data.getLollypath.flavourMiddle}
//                 fillLollyBottom={data.getLollypath.flavourBottom}
//               />
//             </div>
//             <div>
//               <div className="YourLoollyLink">
//                 {" "}
//                 <h4>Your lolly is freezing. Share it with this link:</h4>
//                 <h3 className="link">{`https://v-lolly.netlify.app/lollies/${data.getLollypath.yourLolly}`}</h3>
//               </div>

//               <div className="YourLoolly">
//                 <div className="resultCard">
//                   <strong className="reciepentName">
//                     {data.getLollypath.reciepentName}
//                   </strong>
//                   <h4 className="message">{data.getLollypath.message}</h4>
//                   <strong className="senderName">
//                     — {data.getLollypath.senderName}
//                   </strong>
//                 </div>
//               </div>
//               <p className="desc">
//                 {data.getLollypath.senderName} made this virtual lollipop for
//                 you. You can
//                 <Link style={{ color: "#ffffff" }} to="/createNewlolly">
//                   {" "}
//                   make your own{" "}
//                 </Link>{" "}
//                 to send to a friend who deserve some sugary treat which won't
//                 rot their teeth...
//               </p>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <div className="pageNotFound">404. Page not found.</div>
//       )}
//     </div>
//   )
// }
