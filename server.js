const path=require('path');
const express=require('express');
const dotenv=require('dotenv');
const cors=require('cors');

dotenv.config({path:'./config/config.env'});


// Body parser
const app = express();


//Enable cors

app.use(express.json());
app.use(curs());
app.get('/api/v1/stores');



const PORT = process.env.PORT || 5000 ;
app.listen(PORT, () => 
console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`));

