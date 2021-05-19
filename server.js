const path=require('path');
const express=require('express');
const dotenv=require('dotenv');
const cors=require('cors');
const connectDB=require('./config/db')

dotenv.config({path:'./config/config.env'});

//connect to database
connectDB();

// Body parser
const app = express();


app.use(express.json());

//Enable cors

app.use(cors());

//Routes

//Set static folder
app.use(express.static(path.join(__dirname,'public')));


app.use('/api/v1/cafeterias',require('./routes/cafeterias'));

const PORT = process.env.PORT || 5000 ;
app.listen(PORT, () => 
console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`));

