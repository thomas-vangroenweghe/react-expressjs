import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

import todos from './routes';

const app = express();
const port = 4500;

// middleware
app.use(express.json())

// api
app.use(todos);

// react proxy
app.use(
    createProxyMiddleware({
        target: 'http://localhost:3001',
        changeOrigin: true,
    })
);

// listen
app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});