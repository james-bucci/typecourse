import * as express from 'express';
import { Application }from 'express';

import { initRestApi } from './api/api';
import { apiGlobalErrorHandler } from './api/apiGlobalErrorHandler';

const bodyParser = require('body-parser');
const cors = require('cors');

const app: Application = express();


app.use(cors());
app.use(bodyParser.json()); 

initRestApi(app);

app.use(apiGlobalErrorHandler);

app.listen(8090, function() {
    console.log('Server is running on port 8090');
});

