import path from 'path';
import express from 'express';
import serveStatic from 'serve-static';

const app = express();
const __dirname = path.resolve();
app.use(serveStatic(__dirname + "/dist"));

const port = process.env.PORT || 5000;
app.listen(port);

console.log("App started at port " + port);
