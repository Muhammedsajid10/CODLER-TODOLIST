const express = require('express');
const connection = require('./MongoDb/Config');
const app = express();
const router = require('./Router')
const cors = require('cors')



connection()
app.use(cors())
app.use(express.json())
app.use('/',router)

const PORT = process.env.PORT || 4000
app.listen(PORT,()=> {
    console.log(`Server is running on ${PORT}`);
})