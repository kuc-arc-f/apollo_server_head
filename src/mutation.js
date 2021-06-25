
export const GQL_MUTATION = `
  type Mutation {
    addContent(apikey: String!, content_name: String, values: String!): Content
    updateContent(apikey: String!, id: String!, content_name: String,values: String!
    ): Content
    deleteContent(apikey: String! , id: String!): Content
  }
`;
