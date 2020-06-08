
const http = require('http');

const server = http.createServer((req, res) => {

    const movies = [{id: 1, name: 'Titanic'}, {id: 2, name: 'Early Bird 2'}]

    if(req.url == '/') {
        res.write('Welcome to the http module');
        res.end();
    }

    if(req.url == '/api/movies') {
        res.write(JSON.stringify(movies));
        res.end();
    }
});

server.listen(3000, () => {
    console.log('Web server is running on port 3000')
})