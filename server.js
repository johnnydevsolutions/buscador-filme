const { response } = require('express');
let express = require('express')

let app = express();

app.use(express.static(__dirname+'/dist/filmes-angular'));

app.get('/*', (req,res) => {
    response.sendFile(__dirname+'/dist/filmes-angular/index.html');
});

app.listen(process.env.PORT || 8080);