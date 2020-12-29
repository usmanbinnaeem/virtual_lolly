const path = require("path")
exports.createPages = async ({graphql, actions}) => {
  const { createPage } = actions
  const { data } = await graphql(`
    query MyQuery {
      Lollies {
        lolly {
          yourLolly
        }
      }
    }
  `)
  data.Lollies.lolly.forEach(({ yourLolly }) => {
    createPage({
      path: `lollies/${yourLolly}`,
      component: path.resolve(`./src/components/YourLoolly.js`),
      context: {
        yourLolly: yourLolly,
      },
    })
  })
}
