"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = __importStar(require("express"));
const mongoCon_1 = require("./mongoCon");
const app = express.default();
const port = 3000;
const hostname = 'localhost';
const db = new mongoCon_1.mongoDb;
app.listen(port, hostname, () => {
    console.log(`Server is runing http://${hostname}:${port}`);
});
app.route('/login').get((req, res) => {
    db.findUser().then(doc => {
        res.json(doc);
    }).catch(err => {
        console.log(err);
    });
});
