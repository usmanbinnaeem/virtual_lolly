const { ApolloServer, gql } = require("apollo-server-lambda")
const axios = require("axios")
const faunadb = require("faunadb")
  q = faunadb.query
require("dotenv").config()

 var client = new faunadb.Client({
        secret: process.env.FAUNADB_SECRET_KEY,
      })

const typeDefs = gql`
  type Query {
    lolly: [Lolly!]
    getLollypath(yourLolly: String!): Lolly
  }

  type Lolly {
    senderName: String!
    message: String!
    reciepentName: String!
    flavourTop: String!
    flavourMiddle: String!
    flavourBottom: String!
    yourLolly: String!
  }

  type Mutation {
    createLolly(
      senderName: String!,
      message: String!,
      reciepentName: String!,
      flavourTop: String!,
      flavourMiddle: String!,
      flavourBottom: String!,
      yourLolly: String!
    ): Lolly
  }
`

const resolvers = {
  Query: {
    lolly: async () => {
         try {
        const result = await client.query(
          q.Map(
            q.Paginate(q.Match(q.Index("get_lollies"))),
            q.Lambda(x => q.Get(x))
          )
        )
        console.log(result.data)

        return result.data.map(d => {
          return {
            senderName: d.data.senderName,
            message: d.data.message,
            reciepentName: d.data.reciepentName,
            flavourTop: d.data.flavourTop,
            flavourMiddle: d.data.flavourMiddle,
            flavourBottom: d.data.flavourBottom,
            yourLolly: d.data.yourLolly,
           
          }
        })
      } catch (err) {
        console.log(err)
      }
    },

     getLollypath: async (_, {yourLolly}) => {
      try {
        var result = await client.query(
          q.Get(q.Match(q.Index("lollies_by_path"), yourLolly))
        )
        return result.data
      } catch (e) {
        return e.toString()
      }
    },

  },

  Mutation: {
    createLolly: async (_, args) => {
      // const iid = shortid.generate();
      const result = await client.query(
        q.Create(q.Collection("lollies"), {
          data: args,
        })
      )
        axios
        .post("https://api.netlify.com/build_hooks/5feadf8167f968a6206f49a1")
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.error(error)
        })
      console.log("result ", result)
      return result.data
    },
  },
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
});

exports.handler = server.createHandler();
