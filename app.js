const express = require('express');
const app = express();
const port = 3000;
const postRouter = require('./routers/postsRouter');

// middlewares
app.use(express.static('public'));
app.use(express.json());

app.post("/", (req, res) => {
    // dentro req.body troveremo
    // i dati ricevuti in formato json
    console.log(req.body);
});

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.use("/posts", postRouter);

// middlewares
const notFound = require('./middlewares/notFound.js');
app.use(notFound);
const errorsHandler = require('./middlewares/errorsHandler.js');
app.use(errorsHandler);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});