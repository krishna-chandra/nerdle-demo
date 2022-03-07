require('dotenv').config();
let express = require('express');
let session = require('express-session');
let FileStore = require('session-file-store')(session);
let gameRouter = require('./routes/game');
let gameConfig = require('./gameConfig');

gameConfig.load().then(() => {
});

let app = express();
let fileStoreOptions = {
    ttl: 2419200
};
let port = process.env.port || 3000;

app.use(express.json());

app.use(session({
    store: new FileStore(fileStoreOptions),
    secret: 'speedsignal'
}));

app.use('/game', gameRouter);

app.use(express.static('build'));

app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`);
});