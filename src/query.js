//const {  gql } = require('apollo-server-express');

export const GQL_QUERY = `
  type Query {
    hello: String
    tasks: [Task]
    task(id: String): Task
    contents(site_id: String, content_name: String): [Content]
    content(id: String): Content
  }
`;
