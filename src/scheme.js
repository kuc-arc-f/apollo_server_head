const {  gql } = require('apollo-server-express');
import {GQL_QUERY} from './query'
import {GQL_MUTATION} from './mutation'

export const typeDefs = gql`
  type Todo {
    id: Int!
    title: String
  }
  type Task {
    id: String
    title: String
  }
  type Content {
    id: String
    name: String
    values: String
    created_at: String
  }
  type User {
    id: String
    mail: String
    name: String
    password: String
  } 
  type Session {
    id: String
    user_id: String
    key: String
    value: String
  }         
  ${GQL_QUERY}
  ${GQL_MUTATION}
`;
