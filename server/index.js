const express = require('express');
const graphqlHTTP = require('express-graphql');

const app = express();


app.get('/graphql', graphqlHTTP({
 schema,
 graphiql: true,  
}));


app.listen(3000, ()=>{
 console.log('server listening on port 3000');
});