const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./graphql_schema/schema');
const cors = require('cors');

require('./configurations/data_source');

const app = express();

app.use(cors());

app.use('/graphql', graphqlHTTP({
 schema,
 graphiql: true,  
}));


app.listen(4000, ()=>{
 console.log('server listening on port 3000');
});