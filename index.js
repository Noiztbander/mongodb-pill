const express = require("express");
const app = express();
const path = require('path');
const router = express.Router();

const PORT = process.env.port || 3001;

// var url = process.cwd();

app.use(express.static(__dirname + '/src/public'));

router.get("/", (request, response)=>{
	// response.sendFile(url+"/src/public/html/index.html");
	response.sendFile(path.join(__dirname+'/src/public/html/index.html'));
	//__dirname : It will resolve to your project folder.
});

//add the router
app.use('/', router);

app.listen(PORT, ()=>{
	console.log(`Server Running on  port ${PORT}`);
});

