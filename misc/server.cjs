// server.cjs - for running "in production"
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults({
    static: './dist'
});

server.use(middlewares);
server.use('/api', router);
server.listen(3000, () => {
    console.log('Production build of React app on http://localhost:3000 is active.');
});
