"use strict";
const express = require("express");
const api_1 = require("./api/api");
const apiGlobalErrorHandler_1 = require("./api/apiGlobalErrorHandler");
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
api_1.initRestApi(app);
app.use(apiGlobalErrorHandler_1.apiGlobalErrorHandler);
app.listen(8090, function () {
    console.log('Server is running on port 8090');
});
//# sourceMappingURL=server.js.map