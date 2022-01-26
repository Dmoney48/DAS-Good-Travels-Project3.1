const express = require('express')
const app = express()
const PORT = 3003
const mongoose = require('mongoose')
const cors = require('cors')
const MONGODB_URI = 'mongodb://127.0.0.1:27017/mapDB'
const session = require('express-session')

//SET CORS Middleware
const whitelist = ['http://localhost:3000', 'Your Heroku Appliction']
const corsOptions = {
    origin: (origin, callback) => {
        if(whitelist.indexOf(origin) !== -1 || !origin){
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    },
    credentials: true
}

app.use(cors(corsOptions))

const SESSION_SECRET ='asdf'

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))

//SETUP mongoose
const db = mongoose.connection
db.once('open', ()=> console.log('DB connected...'));
db.on('error', (err)=> console.log(err.message));
db.on('disconnected', ()=> console.log('mongoose disconnected'));

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log('Welcome to the Database!')
})

const isAuthenticated = (req, res, next) => {
    if(req.session.currentUser){
        next()
    } else{
        res.status(403).json({ message: "Login is required"})
    }
}


app.use(express.json())

app.use('/maps', require('./controllers/mapController'))
app.use('/users', require('./controllers/userController'))
app.use('/reviews', require('./controllers/reviewController'))

app.listen(PORT, () => {
  console.log('DAS good traveling on port', PORT,)
})