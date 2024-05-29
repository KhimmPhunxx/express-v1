"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const myLogger = function (req, res, next) {
    console.log('METHOD:', req.method);
    next();
};
app.use(myLogger);
app.get('/', (req, res) => {
    res.send('Hello World');
});
app.get('/api/products', (req, res) => {
    const products = [
        {
            id: 1,
            name: 'product 1'
        },
        {
            id: 2,
            name: 'product 2'
        }
    ];
    res.json(products);
});
app.post('/api/products', (req, res) => {
    res.send("POST Request to Server");
});
app.listen(3000, () => {
    console.log(` Server is running at http://localhost:3000`);
});
