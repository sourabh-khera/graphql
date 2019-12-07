const Mongoose = require('mongoose');

Mongoose.connect("mongodb://localhost/graphql_practice");

(()=>{
	Mongoose.connection.on('open', (err, data) => {
		console.log('mongo connection successful');  
	});
	Mongoose.connection.on('error', (err, data) => {
		console.log(`mongo connection not successful ---- ${err}`);               
	});
})();


