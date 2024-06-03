const express = require ("express")
const app = express ();

// code starts an Express server on port 5000. Once the server is successfully running, 
//"Server is activated" will come to the console. 
//basic setup to ensure server is up and running and can handle incoming requests
app.listen(5000 , ()=> {
        console.log ("Server is activated")
})