const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./graphql_schema/schema');
require('./configurations/data_source');

const app = express();


app.use('/graphql', graphqlHTTP({
 schema,
 graphiql: true,  
}));


app.listen(3000, ()=>{
 console.log('server listening on port 3000');
});