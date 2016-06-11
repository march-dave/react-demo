import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLList,
  GraphQLString
} from 'graphql'

const data = require('./data.json');

import fetch from 'node-fetch';

const tenantType = new GraphQLObjectType({
  name: 'Tenant',
  description: '...',
  fields: () => ({
    _id: { type: GraphQLString },
    name: { type: GraphQLString },
    email: { type: GraphQLString }
  })
});

const queryType = new GraphQLObjectType({
  name: 'Query',
  description: '...',

  fields: () => ({
    tenant: {
      type: tenantType,
      args: {
        id: {type: GraphQLString}
      },
      resolve: (_, {id}) =>
        fetch(`http://localhost:3000/api/tenants/${id}`)
          .then(res => res.json())
          .then(json => json)
    },
    tenants: {
      type: new GraphQLList(tenantType),
      resolve: () =>
        fetch('http://localhost:3000/api/tenants')
          .then(res => res.json())
          .then(json => json)
    }
  })
})



let schema = new GraphQLSchema({
  query: queryType
})

export default schema
