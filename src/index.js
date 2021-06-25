const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
import LibTask from '../lib/LibTask'
import LibContent from '../lib/LibContent'
import {typeDefs} from './scheme'

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => 'Hello world!',
    async contents(parent, args, context, info){
      return await LibContent.get_items(args);
    },
    async content(parent, args, context, info){
      return await LibContent.get_item(args.id);
    },
  },
  Mutation: {
    addContent: async (parent, args, context) => {
      var ret = await LibContent.add_item(args)
      return ret
    },
    updateContent: async (parent, args, context) => {
      var ret = await LibContent.update_item(args)
      return ret
    },
    deleteContent: async (parent, args, context) => {
      var ret = await LibContent.delete_item(args)
      return ret
    },
  }
};

const server = new ApolloServer({ typeDefs, resolvers });
const app = express();
server.applyMiddleware({ app });
// ENV
console.log(app.get('env'));
var config = require('../config.json')[app.get('env')];
// console.log(config.MYSQL_DBNAME);

app.listen({ port: 4000 }, () => {
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
});
