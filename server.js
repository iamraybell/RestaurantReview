// server file. This should be ran to access pages for this app.
let path  = require('path'),
	express = require('express'),
	bp = require('body-parser');

const port = 8000
const app = express();

// Currently we are just listeing in this directory. Could be changed if more files are added.
app.use(express.static(path.join(__dirname, './')));
app.use(bp.urlencoded());


//this tells our server to listen to the port provided above for requests
app.listen(port, ()=>{
	console.log(`listening on ${port}`);
})




